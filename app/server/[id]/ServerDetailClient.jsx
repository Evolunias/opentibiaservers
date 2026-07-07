'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { supabase } from '@/lib/supabase';

const badgeClass = (type) => {
  switch (type) {
    case 'PVP':
      return 'bg-red-50 text-red-700 border-red-200';
    case 'Non-PVP':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'PVP-Enforced':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

function number(value) {
  if (value === null || value === undefined) return '-';
  return Number(value).toLocaleString();
}

function percent(value) {
  if (value === null || value === undefined) return '-';
  return `${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}%`;
}

function date(value) {
  if (!value) return '-';
  return new Date(value).toLocaleString();
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-100 py-2 last:border-b-0">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-950 font-semibold text-right break-words">{value || '-'}</span>
    </div>
  );
}

export default function ServerDetailClient({ params, initialServer }) {
  const router = useRouter();
  const { user } = useAuth();
  const [server, setServer] = useState(initialServer || null);
  const [reviews, setReviews] = useState([]);
  const [messages, setMessages] = useState([]);
  const [uptimeChecks, setUptimeChecks] = useState([]);
  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(!initialServer);
  const [communityLoading, setCommunityLoading] = useState(true);
  const [error, setError] = useState(null);
  const [communityError, setCommunityError] = useState(null);
  const [communityNotice, setCommunityNotice] = useState(null);
  const [claimForm, setClaimForm] = useState({
    claimant_role: 'owner',
    proof_type: 'website_dns',
    proof_value: '',
    note: '',
  });
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    title: '',
    body: '',
  });
  const [messageBody, setMessageBody] = useState('');

  const loadServer = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('servers')
        .select('*')
        .eq('id', params.id)
        .single();

      if (fetchError) {
        setError('Server not found.');
      } else {
        setServer(data);
      }
    } catch (err) {
      setError('Failed to load server details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  const loadCommunity = useCallback(async () => {
    setCommunityLoading(true);

    try {
      const requests = [
        supabase
          .from('server_reviews')
          .select('*')
          .eq('server_id', params.id)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(25),
        supabase
          .from('server_messages')
          .select('*')
          .eq('server_id', params.id)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(25),
        supabase
          .from('server_uptime_checks')
          .select('*')
          .eq('server_id', params.id)
          .order('checked_at', { ascending: false })
          .limit(12),
      ];

      if (user) {
        requests.push(
          supabase
            .from('server_claims')
            .select('*')
            .eq('server_id', params.id)
            .eq('claimant_user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(1)
        );
      }

      const [reviewResult, messageResult, uptimeResult, claimResult] = await Promise.all(requests);

      if (reviewResult.error) throw reviewResult.error;
      if (messageResult.error) throw messageResult.error;
      if (uptimeResult.error) throw uptimeResult.error;
      if (claimResult?.error) throw claimResult.error;

      setReviews(reviewResult.data || []);
      setMessages(messageResult.data || []);
      setUptimeChecks(uptimeResult.data || []);
      setClaim(claimResult?.data?.[0] || null);
    } catch (err) {
      console.error('Failed to load community data:', err);
      setCommunityError('Unable to load reviews, conversations, or monitor history.');
    } finally {
      setCommunityLoading(false);
    }
  }, [params.id, user]);

  useEffect(() => {
    if (!initialServer) {
      loadServer();
    }
  }, [initialServer, loadServer]);

  useEffect(() => {
    loadCommunity();
  }, [loadCommunity]);

  useEffect(() => {
    const channel = supabase
      .channel(`server-detail-${params.id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_reviews', filter: `server_id=eq.${params.id}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_messages', filter: `server_id=eq.${params.id}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_uptime_checks', filter: `server_id=eq.${params.id}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'servers', filter: `id=eq.${params.id}` }, loadServer)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [params.id, loadCommunity, loadServer]);

  const requireUser = () => {
    if (user) return true;
    router.push(`/auth/login?redirect=/server/${params.id}`);
    return false;
  };

  const submitClaim = async (event) => {
    event.preventDefault();
    if (!requireUser()) return;

    setCommunityError(null);
    setCommunityNotice(null);

    try {
      const { error: claimError } = await supabase.from('server_claims').insert([
        {
          server_id: params.id,
          claimant_user_id: user.id,
          claimant_role: claimForm.claimant_role,
          proof_type: claimForm.proof_type,
          proof_value: claimForm.proof_value,
          note: claimForm.note || null,
        },
      ]);

      if (claimError) throw claimError;
      setCommunityNotice('Claim submitted for review.');
      setClaimForm({ claimant_role: 'owner', proof_type: 'website_dns', proof_value: '', note: '' });
      await loadCommunity();
    } catch (err) {
      setCommunityError(err.message || 'Unable to submit claim.');
    }
  };

  const submitReview = async (event) => {
    event.preventDefault();
    if (!requireUser()) return;

    setCommunityError(null);
    setCommunityNotice(null);

    try {
      const { error: reviewError } = await supabase.from('server_reviews').upsert(
        {
          server_id: params.id,
          user_id: user.id,
          rating: Number(reviewForm.rating),
          title: reviewForm.title || null,
          body: reviewForm.body || null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'server_id,user_id' }
      );

      if (reviewError) throw reviewError;
      setCommunityNotice('Review saved.');
      setReviewForm({ rating: 5, title: '', body: '' });
      await Promise.all([loadServer(), loadCommunity()]);
    } catch (err) {
      setCommunityError(err.message || 'Unable to save review.');
    }
  };

  const submitMessage = async (event) => {
    event.preventDefault();
    if (!requireUser()) return;

    setCommunityError(null);
    setCommunityNotice(null);

    try {
      const { error: messageError } = await supabase.from('server_messages').insert([
        {
          server_id: params.id,
          user_id: user.id,
          body: messageBody,
        },
      ]);

      if (messageError) throw messageError;
      setCommunityNotice('Message posted.');
      setMessageBody('');
      await loadCommunity();
    } catch (err) {
      setCommunityError(err.message || 'Unable to post message.');
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-gray-700 hover:text-gray-950 mb-6 inline-block font-semibold">
            Back to servers
          </Link>
          <div className="bg-white border border-gray-200 rounded p-10 text-center">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-600">Loading server...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !server) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-gray-700 hover:text-gray-950 mb-6 inline-block font-semibold">
            Back to servers
          </Link>
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </main>
    );
  }

  const isOwned = Boolean(server.owner_user_id || server.user_id);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="text-gray-700 hover:text-gray-950 mb-6 inline-block font-semibold">
          Back to servers
        </Link>

        <article className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm mb-6">
          <header className="px-6 py-6 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {server.source_rank ? <span className="text-xs font-bold text-gray-500">Rank #{server.source_rank}</span> : null}
                  <span className={`w-2.5 h-2.5 rounded-full ${server.is_online ? 'bg-green-600' : 'bg-red-600'}`} />
                  <span className="text-xs font-semibold text-gray-500">{server.is_online ? 'Online' : 'Offline'}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-950 mb-2">{server.name}</h1>
                <p className="text-gray-600">{server.host || server.ip}:{server.port || 7171}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded border text-sm font-semibold ${badgeClass(server.world_type)}`}>
                  {server.world_type || 'PVP'}
                </span>
                <span className="px-3 py-1 rounded border border-gray-200 bg-white text-gray-700 text-sm font-semibold">
                  {server.claim_status || 'unclaimed'}
                </span>
                {server.source ? (
                  <span className="px-3 py-1 rounded border border-gray-200 bg-white text-gray-700 text-sm font-semibold">
                    {server.source}
                  </span>
                ) : null}
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
              <Stat label="Online" value={number(server.players_online || 0)} />
              <Stat label="Max" value={number(server.max_players)} />
              <Stat label="Peak" value={number(server.players_peak || 0)} />
              <Stat label="Uptime" value={percent(server.uptime_percent)} />
              <Stat label="Rating" value={`${Number(server.average_rating || 0).toFixed(2)}`} />
              <Stat label="Reviews" value={number(server.review_count || 0)} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Server Data</h2>
                <InfoRow label="Client" value={server.version} />
                <InfoRow label="EXP" value={server.exp_rate ? `${server.exp_rate}x` : '-'} />
                <InfoRow label="Skill" value={server.skill_rate ? `${server.skill_rate}x` : '-'} />
                <InfoRow label="Magic" value={server.magic_rate ? `${server.magic_rate}x` : '-'} />
                <InfoRow label="Loot" value={server.loot_rate ? `${server.loot_rate}x` : '-'} />
                <InfoRow label="Location" value={server.location} />
                <InfoRow label="Engine" value={server.server_engine} />
                <InfoRow label="Monitor" value={server.last_monitor_status ? `${server.last_monitor_status}${server.last_response_time_ms ? ` / ${server.last_response_time_ms}ms` : ''}` : 'unknown'} />
              </section>

              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Source and Ownership</h2>
                <InfoRow label="Source" value={server.source || 'user_submission'} />
                <InfoRow label="Source ID" value={server.source_id} />
                <InfoRow label="Claim Status" value={server.claim_status || 'unclaimed'} />
                <InfoRow label="Owner" value={server.source_owner_name} />
                <InfoRow label="Last Seen" value={date(server.last_seen_at || server.last_check)} />
                <InfoRow label="Monitor Checked" value={date(server.last_monitor_checked_at)} />
                {server.source_url ? (
                  <div className="pt-3">
                    <a href={server.source_url} target="_blank" rel="noopener noreferrer" className="inline-flex px-3 py-2 bg-gray-950 text-white rounded text-sm font-semibold hover:opacity-85">
                      Open source record
                    </a>
                  </div>
                ) : null}
              </section>
            </div>

            {server.description ? (
              <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Description</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{server.description}</p>
              </section>
            ) : null}

            {server.tags?.length ? (
              <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {server.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>

        {communityNotice ? <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-4">{communityNotice}</div> : null}
        {communityError ? <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4">{communityError}</div> : null}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <section className="bg-white border border-gray-200 rounded p-4">
            <h2 className="text-lg font-bold text-gray-950 mb-2">Claim This Listing</h2>
            {isOwned ? (
              <p className="text-sm text-gray-600">This listing is already claimed or directly submitted.</p>
            ) : claim ? (
              <p className="text-sm text-gray-700">Your claim is currently <span className="font-semibold">{claim.status}</span>.</p>
            ) : (
              <form onSubmit={submitClaim} className="space-y-3">
                <select
                  value={claimForm.claimant_role}
                  onChange={(event) => setClaimForm((current) => ({ ...current, claimant_role: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="community_manager">Community Manager</option>
                </select>
                <select
                  value={claimForm.proof_type}
                  onChange={(event) => setClaimForm((current) => ({ ...current, proof_type: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  <option value="website_dns">Website or DNS Proof</option>
                  <option value="email_domain">Email Domain</option>
                  <option value="source_profile">Source Profile</option>
                  <option value="manual">Manual Review</option>
                </select>
                <input
                  value={claimForm.proof_value}
                  onChange={(event) => setClaimForm((current) => ({ ...current, proof_value: event.target.value }))}
                  placeholder="Proof URL, domain, or contact"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <textarea
                  value={claimForm.note}
                  onChange={(event) => setClaimForm((current) => ({ ...current, note: event.target.value }))}
                  placeholder="Optional details for review"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  rows="3"
                />
                <button type="submit" className="w-full bg-gray-950 text-white rounded px-3 py-2 text-sm font-semibold">
                  Submit Claim
                </button>
              </form>
            )}
          </section>

          <section className="bg-white border border-gray-200 rounded p-4 lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-950 mb-2">Uptime Monitor</h2>
            {uptimeChecks.length === 0 ? (
              <p className="text-sm text-gray-600">No monitor checks recorded yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {uptimeChecks.map((check) => (
                  <div key={check.id} className="border border-gray-100 rounded p-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${check.status === 'online' ? 'text-green-700' : 'text-red-700'}`}>{check.status}</span>
                      <span className="text-gray-500">{date(check.checked_at)}</span>
                    </div>
                    <div className="text-gray-600">{check.response_time_ms ? `${check.response_time_ms}ms` : check.error || 'No response time'}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="bg-white border border-gray-200 rounded p-4">
            <h2 className="text-lg font-bold text-gray-950 mb-3">Reviews</h2>
            <form onSubmit={submitReview} className="space-y-3 mb-5">
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3">
                <select
                  value={reviewForm.rating}
                  onChange={(event) => setReviewForm((current) => ({ ...current, rating: event.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>{rating} stars</option>
                  ))}
                </select>
                <input
                  value={reviewForm.title}
                  onChange={(event) => setReviewForm((current) => ({ ...current, title: event.target.value }))}
                  placeholder="Review title"
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              <textarea
                value={reviewForm.body}
                onChange={(event) => setReviewForm((current) => ({ ...current, body: event.target.value }))}
                placeholder="Share your experience with this server"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                rows="3"
              />
              <button type="submit" className="bg-gray-950 text-white rounded px-4 py-2 text-sm font-semibold">
                Save Review
              </button>
            </form>

            {communityLoading ? <p className="text-sm text-gray-600">Loading reviews...</p> : null}
            <div className="space-y-3">
              {reviews.map((review) => (
                <div key={review.id} className="border border-gray-100 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-950">{review.title || 'Player review'}</h3>
                    <span className="text-sm font-bold text-gray-700">{review.rating}/5</span>
                  </div>
                  {review.body ? <p className="text-sm text-gray-700 whitespace-pre-wrap">{review.body}</p> : null}
                  <p className="text-xs text-gray-500 mt-2">{date(review.created_at)}</p>
                </div>
              ))}
              {!communityLoading && reviews.length === 0 ? <p className="text-sm text-gray-600">No reviews yet.</p> : null}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded p-4">
            <h2 className="text-lg font-bold text-gray-950 mb-3">Conversation</h2>
            <form onSubmit={submitMessage} className="space-y-3 mb-5">
              <textarea
                value={messageBody}
                onChange={(event) => setMessageBody(event.target.value)}
                placeholder="Ask questions, report changes, or talk with the community"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                rows="3"
              />
              <button type="submit" className="bg-gray-950 text-white rounded px-4 py-2 text-sm font-semibold">
                Post Message
              </button>
            </form>

            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className="border border-gray-100 rounded p-3">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{message.body}</p>
                  <p className="text-xs text-gray-500 mt-2">{date(message.created_at)}</p>
                </div>
              ))}
              {!communityLoading && messages.length === 0 ? <p className="text-sm text-gray-600">No conversation yet.</p> : null}
            </div>
          </section>
        </div>

        {server.source_payload && Object.keys(server.source_payload).length > 0 ? (
          <details className="bg-white border border-gray-200 rounded p-4 mt-6">
            <summary className="cursor-pointer text-lg font-bold text-gray-950">Raw Source Payload</summary>
            <pre className="mt-4 text-xs bg-gray-950 text-gray-100 rounded p-4 overflow-auto max-h-96">
              {JSON.stringify(server.source_payload, null, 2)}
            </pre>
          </details>
        ) : null}
      </div>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded p-4">
      <p className="text-xs text-gray-500 uppercase font-bold mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-950">{value}</p>
    </div>
  );
}
