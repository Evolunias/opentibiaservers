'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import AuthModal from '@/app/components/AuthModal';
import {
  castDailyVote,
  fetchServerReviews,
  fetchUserVoteToday,
  resolveServerBySlug,
  upsertServerReview,
} from '@/lib/community-actions';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleString();
}

export default function ServerCommunityPanel({ slug, serverId: initialServerId = null, serverName = '' }) {
  const { user } = useAuth();
  const [server, setServer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [votedToday, setVotedToday] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [reviewForm, setReviewForm] = useState({ rating: 5, title: '', body: '' });

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let nextServer = null;
      if (initialServerId) {
        nextServer = { id: initialServerId, slug, name: serverName };
      }

      if (slug) {
        const resolved = await resolveServerBySlug(slug);
        if (resolved.error && !resolved.server) {
          setError(resolved.error);
        }
        if (resolved.server) {
          nextServer = resolved.server;
        }
      }

      setServer(nextServer);

      if (!nextServer?.id) {
        setReviews([]);
        setVotedToday(false);
        return;
      }

      const [{ reviews: reviewRows, error: reviewError }, voteState] = await Promise.all([
        fetchServerReviews(nextServer.id),
        user ? fetchUserVoteToday(nextServer.id, user.id) : Promise.resolve({ voted: false }),
      ]);

      if (reviewError) setError(reviewError);
      setReviews(reviewRows || []);
      setVotedToday(Boolean(voteState.voted));
    } catch (err) {
      console.error(err);
      setError(err.message || 'Unable to load community data.');
    } finally {
      setLoading(false);
    }
  }, [initialServerId, serverName, slug, user]);

  useEffect(() => {
    load();
  }, [load]);

  const requireUser = () => {
    if (user) return true;
    setAuthMode('login');
    setAuthOpen(true);
    return false;
  };

  const onVote = async () => {
    if (!requireUser()) return;
    if (!server?.id) {
      setError('This page is not linked to a live directory record yet, so voting is unavailable.');
      return;
    }

    setBusy(true);
    setNotice(null);
    setError(null);
    const result = await castDailyVote(server.id, user.id);
    setBusy(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setNotice('Vote counted for today. Come back tomorrow to vote again.');
    setVotedToday(true);
    await load();
  };

  const onReview = async (event) => {
    event.preventDefault();
    if (!requireUser()) return;
    if (!server?.id) {
      setError('This page is not linked to a live directory record yet, so reviews are unavailable.');
      return;
    }

    setBusy(true);
    setNotice(null);
    setError(null);
    const result = await upsertServerReview({
      serverId: server.id,
      userId: user.id,
      rating: reviewForm.rating,
      title: reviewForm.title,
      body: reviewForm.body,
    });
    setBusy(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setNotice('Review saved.');
    setReviewForm({ rating: 5, title: '', body: '' });
    await load();
  };

  const displayName = server?.name || serverName || slug || 'this server';

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-200 bg-gray-50">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">Community</p>
          <h2 className="text-2xl font-black text-gray-950">Reviews & daily votes for {displayName}</h2>
          <p className="text-sm text-gray-600 mt-1">
            Signed-in players can leave one review and cast one vote per day. Rankings refresh from those votes.
          </p>
        </div>
        <Link href="/rankings" className="text-sm font-semibold text-gray-950 underline">
          View rankings
        </Link>
      </div>

      {notice ? <p className="mb-3 rounded border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{notice}</p> : null}
      {error ? <p className="mb-3 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p> : null}

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
        <div className="rounded border border-gray-200 bg-white p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xl font-black text-gray-950">{Number(server?.average_rating || 0).toFixed(1)}</div>
              <div className="text-xs text-gray-500">Avg rating</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xl font-black text-gray-950">{Number(server?.review_count || reviews.length || 0)}</div>
              <div className="text-xs text-gray-500">Reviews</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xl font-black text-gray-950">{Number(server?.vote_count || 0)}</div>
              <div className="text-xs text-gray-500">All votes</div>
            </div>
            <div className="rounded bg-gray-50 p-3">
              <div className="text-xl font-black text-gray-950">{Number(server?.votes_today || 0)}</div>
              <div className="text-xs text-gray-500">Votes today</div>
            </div>
          </div>

          <button
            type="button"
            disabled={busy || votedToday || !server?.id}
            onClick={onVote}
            className="w-full rounded bg-gray-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {!server?.id ? 'Voting unavailable' : votedToday ? 'Voted today' : 'Vote for this server'}
          </button>
          <p className="text-xs text-gray-500">One vote per signed-in account per server each UTC day.</p>
        </div>

        <div className="rounded border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-bold text-gray-950 mb-3">Player reviews</h3>
          <form onSubmit={onReview} className="space-y-3 mb-5">
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
              placeholder="Share a specific, recent experience"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              rows="3"
            />
            <button
              type="submit"
              disabled={busy || !server?.id}
              className="rounded bg-gray-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Save review
            </button>
          </form>

          {loading ? <p className="text-sm text-gray-600">Loading reviews...</p> : null}
          <div className="space-y-3">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-100 rounded p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-950">{review.title || 'Player review'}</h4>
                  <span className="text-sm font-bold text-gray-700">{review.rating}/5</span>
                </div>
                {review.body ? <p className="text-sm text-gray-700 whitespace-pre-wrap">{review.body}</p> : null}
                <p className="text-xs text-gray-500 mt-2">{formatDate(review.created_at)}</p>
              </div>
            ))}
            {!loading && reviews.length === 0 ? (
              <p className="text-sm text-gray-600">No published reviews yet. Be the first signed-in player to leave one.</p>
            ) : null}
          </div>
        </div>
      </div>

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSuccess={() => {
          setAuthOpen(false);
          load();
        }}
      />
    </section>
  );
}
