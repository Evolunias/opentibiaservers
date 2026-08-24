'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import AuthModal from '@/app/components/AuthModal';
import TrustedExternalLink from '@/app/components/TrustedExternalLink';
import { assessExternalLink, normalizeExternalUrl, safeUrlOrNull } from '@/lib/external-links';
import { supabase } from '@/lib/supabase';
import { applyServerIdentity } from '@/lib/server-identity';

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

function DirectoryEmptyState({ title, body, action }) {
  return (
    <div className="rounded border border-dashed border-gray-300 bg-gray-50 p-4">
      <h3 className="text-sm font-bold text-gray-950">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{body}</p>
      {action ? <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{action}</p> : null}
    </div>
  );
}

function buildPlayerGuide(server) {
  const name = server.name || 'This server';
  const client = server.version || 'an unconfirmed client version';
  const exp = server.exp_rate ? `x${server.exp_rate}` : 'unconfirmed';
  const location = server.location || 'an unconfirmed host location';
  const online = Number(server.players_online || 0).toLocaleString();
  const max = server.max_players ? Number(server.max_players).toLocaleString() : 'unknown';
  const uptime = server.uptime_percent ? `${Number(server.uptime_percent).toFixed(2)}%` : 'unconfirmed';
  const pvp = server.world_type || server.pvp_type || 'unconfirmed PvP rules';
  const featureLead = Array.isArray(server.feature_bullets) && server.feature_bullets.length ? server.feature_bullets[0] : null;
  const storyLead = Array.isArray(server.custom_sections) && server.custom_sections.length ? server.custom_sections[0]?.body : null;
  const ownerName = server.source_owner_name || server.owner_name || 'the listed owner';
  const ownerContact = server.owner_email || server.contact_email || server.contact_discord || server.forum_url || server.community_url || null;
  const contactSignal = ownerContact
    ? `The clearest public contact signal is ${ownerName}${server.owner_email || server.contact_email ? ` at ${server.owner_email || server.contact_email}` : ''}${server.contact_discord ? ` and Discord ${server.contact_discord}` : ''}.`
    : `The page does not yet expose a direct owner contact path, so the safest next step is to use the official website, forum, or claim flow.`;

  return [
    {
      title: `What ${name} feels like from the outside`,
      body: `${name} is listed with ${online} players online out of ${max}, ${client}, ${exp} EXP, ${pvp}, and ${location}. The page should help a player decide whether that combination feels like a world worth learning, not just a row worth skimming.`,
    },
    {
      title: `${name} activity and stability snapshot`,
      body: `The latest directory snapshot records ${uptime} uptime and a recent online count of ${online}. Treat this as a live-discovery signal, not a permanent guarantee. Stronger confidence comes from repeated monitor checks, recent owner updates, visible community discussion, and screenshots or changelogs from official channels.`,
    },
    {
      title: `What makes ${name} worth a closer look`,
      body: `${featureLead || storyLead || `${name} should be judged by the shape of its rules, its community tone, and the evidence attached to its public links.`} ${contactSignal} If those signals match what you want, use the official links and community areas on this page to confirm the current launch state and ask existing players about balance, staff response, bot policy, and event cadence.`,
    },
  ];
}

function buildIntentChecklist(server) {
  const name = server.name || 'this server';
  const checks = [
    server.website_url || server.external_launch_url
      ? `Visit the official ${name} website before downloading a client or creating an account.`
      : `Confirm the official ${name} website before downloading any client files.`,
    server.version
      ? `Match your client to Tibia ${server.version}; mismatched clients are a common reason players cannot connect.`
      : 'Confirm the active client version before trying to connect.',
    server.world_type
      ? `Review the ${server.world_type} rules, skull system, frag limits, and bot policy before committing time.`
      : 'Review PvP rules, frag limits, and bot policy before committing time.',
    server.uptime_percent
      ? `Use the listed ${Number(server.uptime_percent).toFixed(2)}% uptime as a discovery signal, then verify recent Discord or forum activity.`
      : 'Look for recent monitor checks, Discord activity, and owner posts to confirm the world is active.',
    'Read player reviews and conversation updates for current balance, staff response, donations, resets, and community health.',
  ];

  return checks;
}

function buildTrustSummary(server) {
  const signals = [
    server.source ? `Source: ${server.source}` : 'Directory record',
    server.source_url ? 'Source record linked' : null,
    server.website_url || server.external_launch_url ? 'Official website mapped' : null,
    server.official_last_researched_at ? 'Official source check timestamped' : null,
    server.claim_status ? `Claim status: ${server.claim_status}` : 'Claim status: unclaimed',
    server.review_count ? `${Number(server.review_count).toLocaleString()} community review signals` : null,
    server.last_monitor_checked_at ? 'Recent monitor data available' : null,
  ].filter(Boolean);

  return signals;
}

function buildServerNarrative(server) {
  const name = server.name || 'This server';
  const ownerName = server.source_owner_name || server.owner_name || null;
  const ownerContact = server.owner_email || server.contact_email || null;
  const directContact = server.contact_discord || server.forum_url || server.community_url || server.launcher_url || null;
  const features = Array.isArray(server.feature_bullets) && server.feature_bullets.length ? server.feature_bullets : [];
  const sections = Array.isArray(server.custom_sections) ? server.custom_sections : [];
  const faqCount = Array.isArray(server.faq_items) ? server.faq_items.length : 0;

  const highlight = features[0] || sections[0]?.body || server.official_summary || server.description || `${name} should be read as a living profile, not a static list row.`;
  const differentiator = features[1] || sections[1]?.body || `The page still needs a better owner story, clearer feature notes, and a stronger explanation of what makes ${name} distinct from nearby servers.`;
  const ownerStory = ownerName || ownerContact
    ? `Ownership and contact are clearest when tied to a real person or channel: ${ownerName ? ownerName : 'owner information'}${ownerContact ? `, ${ownerContact}` : ''}${directContact && directContact !== ownerContact ? `, ${directContact}` : ''}.`
    : `Ownership still needs a direct, verifiable contact path before the listing can be treated like a fully managed profile.`;
  const communitySignal = `${name} becomes easier to trust when player reviews, screenshots, and recent updates explain how people actually experience the world, not just how it is advertised.`;
  const verificationSignal = faqCount
    ? `${name} already carries ${faqCount} FAQ item${faqCount === 1 ? '' : 's'}, which is a useful start for player intent, but the strongest version of the page still pairs those answers with current rules, support details, and dated community feedback.`
    : `The page still needs owner-authored FAQ material, because that is often where players find the clearest answer to the first three questions they have before logging in.`;

  return [
    {
      eyebrow: 'Server Story',
      heading: `Why ${name} stands out`,
      body: [
        highlight,
        differentiator,
      ],
    },
    {
      eyebrow: 'Ownership',
      heading: `Who runs ${name} and how to reach them`,
      body: [
        ownerStory,
        `If a server wants to feel credible, its owner or manager should be reachable through an official website, Discord, forum, email, or claim flow. ${name} should expose that path plainly so players know where to ask questions and where to report problems.`,
      ],
    },
    {
      eyebrow: 'Community',
      heading: `How players will read ${name}`,
      body: [
        communitySignal,
        `Reviews, messages, screenshots, and updates should explain what the server actually rewards: pace, competition, social structure, custom systems, or nostalgia. Those details matter more than a rate label because they tell a newcomer what kind of evenings ${name} tends to create.`,
      ],
    },
    {
      eyebrow: 'Verification',
      heading: `What still needs proof on ${name}`,
      body: [
        verificationSignal,
        `The best profile keeps the difference visible between a public snapshot, an owner-confirmed detail, and a player memory. That separation makes the page more useful and makes the server easier to trust.`,
      ],
    },
  ];
}

function buildExpectedDomains(server = {}) {
  return [
    server.host,
    server.ip,
    server.website_url,
    server.external_launch_url,
  ]
    .map((value) => {
      const href = normalizeExternalUrl(value);
      return href ? new URL(href).hostname : String(value || '');
    })
    .filter(Boolean);
}

function validateEditableLinks(values, expectedDomains) {
  const checks = [
    ['Discord', values.contact_discord, { allowUntrusted: true }],
    ['Launcher URL', values.launcher_url, { kind: 'download', expectedDomains }],
    ['Trailer URL', values.trailer_url, { expectedDomains }],
  ];

  for (const [label, value, options] of checks) {
    if (!String(value || '').trim()) continue;
    const result = assessExternalLink(value, options);
    if (!result.clickable) return `${label} was blocked: ${result.reason}.`;
  }

  const gallery = String(values.gallery_images || '')
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
  for (const image of gallery) {
    const result = assessExternalLink(image, { kind: 'image', expectedDomains });
    if (!result.clickable) return `Gallery URL was blocked: ${result.reason}.`;
  }

  return null;
}

function stringifyJson(value, fallback) {
  try {
    return JSON.stringify(value ?? fallback, null, 2);
  } catch {
    return JSON.stringify(fallback, null, 2);
  }
}

export default function ServerDetailClient({ params, initialServer, serverId: explicitServerId }) {
  const { user } = useAuth();
  const serverId = explicitServerId || params?.id || initialServer?.id;
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
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
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
  const [ownerEditor, setOwnerEditor] = useState({
    template_name: initialServer?.template_name || 'directory_pro',
    promo_headline: initialServer?.promo_headline || '',
    promo_subheadline: initialServer?.promo_subheadline || '',
    contact_discord: initialServer?.contact_discord || '',
    launcher_url: initialServer?.launcher_url || '',
    trailer_url: initialServer?.trailer_url || '',
    feature_bullets: (initialServer?.feature_bullets || []).join('\n'),
    gallery_images: (initialServer?.gallery_images || []).join('\n'),
    faq_items: stringifyJson(initialServer?.faq_items, []),
    custom_sections: stringifyJson(initialServer?.custom_sections, []),
  });

  const loadServer = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('servers')
        .select('*')
        .eq('id', serverId)
        .single();

      if (fetchError) {
        setError('Server not found.');
      } else {
        const canonicalServer = applyServerIdentity(data);
        setServer(canonicalServer);
        setOwnerEditor({
          template_name: data.template_name || 'directory_pro',
          promo_headline: data.promo_headline || '',
          promo_subheadline: data.promo_subheadline || '',
          contact_discord: data.contact_discord || '',
          launcher_url: data.launcher_url || '',
          trailer_url: data.trailer_url || '',
          feature_bullets: (data.feature_bullets || []).join('\n'),
          gallery_images: (data.gallery_images || []).join('\n'),
          faq_items: stringifyJson(data.faq_items, []),
          custom_sections: stringifyJson(data.custom_sections, []),
        });
      }
    } catch (err) {
      setError('Failed to load server details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [serverId]);

  const loadCommunity = useCallback(async () => {
    setCommunityLoading(true);

    try {
      const requests = [
        supabase
          .from('server_reviews')
          .select('*')
          .eq('server_id', serverId)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(25),
        supabase
          .from('server_messages')
          .select('*')
          .eq('server_id', serverId)
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(25),
        supabase
          .from('server_uptime_checks')
          .select('*')
          .eq('server_id', serverId)
          .order('checked_at', { ascending: false })
          .limit(12),
      ];

      if (user) {
        requests.push(
          supabase
            .from('server_claims')
            .select('*')
            .eq('server_id', serverId)
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
      setCommunityError(null);
    } finally {
      setCommunityLoading(false);
    }
  }, [serverId, user]);

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
      .channel(`server-detail-${serverId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_reviews', filter: `server_id=eq.${serverId}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_messages', filter: `server_id=eq.${serverId}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'server_uptime_checks', filter: `server_id=eq.${serverId}` }, loadCommunity)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'servers', filter: `id=eq.${serverId}` }, loadServer)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [serverId, loadCommunity, loadServer]);

  const requireUser = () => {
    if (user) return true;
    setAuthMode('login');
    setAuthOpen(true);
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
          server_id: serverId,
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
          server_id: serverId,
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
          server_id: serverId,
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
  const canEditListing = Boolean(user && (user.id === server.owner_user_id || user.id === server.user_id));
  const renderHeadline = server.promo_headline || server.official_facts?.headline || server.name;
  const renderSubheadline = server.promo_subheadline || server.official_summary || server.description;
  const expectedDomains = buildExpectedDomains(server);
  const officialWebsiteHref = safeUrlOrNull(server.website_url || server.external_launch_url, { expectedDomains });
  const discordHref = safeUrlOrNull(server.contact_discord, { allowUntrusted: true });
  const forumHref = safeUrlOrNull(server.forum_url || server.community_url, { expectedDomains, allowUntrusted: true });
  const launcherHref = safeUrlOrNull(server.launcher_url, { kind: 'download', expectedDomains });
  const trailerHref = safeUrlOrNull(server.trailer_url, { expectedDomains, allowUntrusted: true });
  const ownerContact = server.owner_email || server.contact_email;
  const hasMeaningfulContentStatus = server.content_status && server.content_status !== 'imported';
  const galleryImages = Array.isArray(server.gallery_images)
    ? server.gallery_images.filter((url) => assessExternalLink(url, { kind: 'image', expectedDomains }).clickable)
    : [];
  const referenceSources = Array.isArray(server.research_sources)
    ? server.research_sources.filter((source) => source?.url && source?.label && assessExternalLink(source.url, { expectedDomains }).clickable)
    : [];
  const hasOfficialLinks = Boolean(officialWebsiteHref || launcherHref || trailerHref || discordHref || forumHref || ownerContact);
  const playerGuide = buildPlayerGuide(server);
  const serverNarrative = buildServerNarrative(server);
  const intentChecklist = buildIntentChecklist(server);
  const trustSummary = buildTrustSummary(server);

  const saveOwnerTemplate = async (event) => {
    event.preventDefault();
    if (!requireUser()) return;

    setCommunityError(null);
    setCommunityNotice(null);

    try {
      const linkError = validateEditableLinks(ownerEditor, expectedDomains);
      if (linkError) {
        setCommunityError(linkError);
        return;
      }

      const payload = {
        template_name: ownerEditor.template_name || 'directory_pro',
        promo_headline: ownerEditor.promo_headline || null,
        promo_subheadline: ownerEditor.promo_subheadline || null,
        contact_discord: safeUrlOrNull(ownerEditor.contact_discord, { allowUntrusted: true }) || null,
        launcher_url: safeUrlOrNull(ownerEditor.launcher_url, { kind: 'download', expectedDomains }) || null,
        trailer_url: safeUrlOrNull(ownerEditor.trailer_url, { expectedDomains, allowUntrusted: true }) || null,
        feature_bullets: ownerEditor.feature_bullets
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean),
        gallery_images: ownerEditor.gallery_images
          .split('\n')
          .map((item) => item.trim())
          .filter((item) => assessExternalLink(item, { kind: 'image', expectedDomains }).clickable),
        faq_items: ownerEditor.faq_items.trim() ? JSON.parse(ownerEditor.faq_items) : [],
        custom_sections: ownerEditor.custom_sections.trim() ? JSON.parse(ownerEditor.custom_sections) : [],
        owner_edit_updated_at: new Date().toISOString(),
      };

      const { error: updateError } = await supabase
        .from('servers')
        .update(payload)
        .eq('id', serverId)
        .or(`owner_user_id.eq.${user.id},user_id.eq.${user.id}`);

      if (updateError) throw updateError;

      setCommunityNotice('Listing profile updated.');
      await loadServer();
    } catch (err) {
      setCommunityError(err.message || 'Unable to update listing profile.');
    }
  };

  return (
    <>
    <main className="min-h-screen bg-white text-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="text-gray-700 hover:text-gray-950 mb-6 inline-block font-semibold">
          Back to servers
        </Link>

        <article className="overflow-hidden mb-6 border border-gray-200 rounded bg-white">
          <header className="px-6 py-6 border-b border-gray-200 bg-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {server.source_rank ? <span className="text-xs font-bold text-gray-500">Rank #{server.source_rank}</span> : null}
                  <span className={`status-dot ${server.is_online ? 'status-dot--online' : 'status-dot--offline'}`} />
                  <span className="text-xs font-semibold text-gray-600">{server.is_online ? 'Online' : 'Offline'}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-950 mb-2">{server.name}</h1>
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
            <section className="p-5 mb-6 border border-gray-200 rounded bg-gray-50">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Open Tibia server story</p>
                  <h2 className="text-2xl font-bold text-gray-950 mb-2">{renderHeadline}</h2>
                  <p className="text-gray-700">{renderSubheadline || 'Server owners can customize this listing after claiming it.'}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    This page is built for players deciding whether {server.name} is worth joining now. It combines live directory data,
                    owner-manageable fields, public source references, monitor history, reviews, and community discussion in one profile that should feel
                    specific to the server rather than copied from the next listing.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {launcherHref ? (
                    <a href={launcherHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-950 text-white rounded font-semibold hover:bg-gray-800">
                      Launcher
                    </a>
                  ) : null}
                  {officialWebsiteHref ? (
                    <a href={officialWebsiteHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded font-semibold hover:bg-gray-100">
                      Official Site
                    </a>
                  ) : null}
                  {discordHref ? (
                    <a href={discordHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded font-semibold hover:bg-gray-100">
                      Discord
                    </a>
                  ) : null}
                </div>
              </div>
            </section>

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
                <h2 className="text-lg font-bold text-gray-950 mb-3">Server identity for {server.name}</h2>
                <InfoRow label="Client" value={server.version} />
                <InfoRow label="EXP" value={server.exp_rate ? `${server.exp_rate}x` : '-'} />
                <InfoRow label="Skill" value={server.skill_rate ? `${server.skill_rate}x` : '-'} />
                <InfoRow label="Magic" value={server.magic_rate ? `${server.magic_rate}x` : '-'} />
                <InfoRow label="Loot" value={server.loot_rate ? `${server.loot_rate}x` : '-'} />
                <InfoRow label="Location" value={server.location} />
                <InfoRow label="Engine" value={server.server_engine} />
                <InfoRow label="Monitor" value={server.last_monitor_status ? `${server.last_monitor_status}${server.last_response_time_ms ? ` / ${server.last_response_time_ms}ms` : ''}` : 'unknown'} />
              </section>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] gap-6 mb-6">
              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Server story</h2>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {serverNarrative[0]?.body?.[0] || server.official_summary || server.description || 'This listing is currently using verified directory fields while the deeper owner profile is being built. Players should verify the current website, client, rules, and community channels before downloading files or creating an account.'}
                </p>
                <p className="mt-3 text-gray-700 whitespace-pre-wrap">
                  {serverNarrative[0]?.body?.[1] || 'The record should expand with owner-confirmed notes, player feedback, and dated source material as it matures.'}
                </p>
              </section>

              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Player verification</h2>
                <InfoRow label="Canonical Listing" value={server.slug ? `/servers/${server.slug}` : '-'} />
                {hasMeaningfulContentStatus ? <InfoRow label="Profile Status" value={server.content_status} /> : null}
                {server.official_last_researched_at ? <InfoRow label="Official Check" value={date(server.official_last_researched_at)} /> : null}
                <InfoRow label="Claim Status" value={server.claim_status || 'unclaimed'} />
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  Use this panel to separate live source data from owner-confirmed details. Strong listings should include a working website, current rules, Discord or forum link, screenshots, staff contact, and recent player feedback.
                </p>
              </section>
            </div>

            <section className="border border-gray-200 rounded p-4 mb-6">
              <h2 className="text-lg font-bold text-gray-950 mb-3">What a player should know about {server.name}</h2>
              <div className="grid grid-cols-1 gap-3">
                {playerGuide.map((item) => (
                  <div key={item.title} className="rounded border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-base font-bold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-gray-200 rounded p-4 mb-6">
              <h2 className="text-lg font-bold text-gray-950 mb-3">How {server.name} reads on the page</h2>
              <div className="grid grid-cols-1 gap-3">
                {serverNarrative.map((section) => (
                  <div key={section.heading} className="rounded border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{section.eyebrow}</p>
                    <h3 className="mt-1 text-base font-bold text-gray-950">{section.heading}</h3>
                    <div className="mt-2 space-y-3">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">What to verify before playing {server.name}</h2>
                <ul className="space-y-3">
                  {intentChecklist.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border border-gray-200 rounded p-4">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Freshness signals</h2>
                <div className="flex flex-wrap gap-2">
                  {trustSummary.map((signal) => (
                    <span key={signal} className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700">
                      {signal}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-700">
                  Open Tibia worlds change quickly. The strongest pages are kept current through manual research, uptime checks,
                  player feedback, screenshots, and owner-verified edits rather than static promotional copy.
                </p>
              </section>
            </div>

            <section className="border border-gray-200 rounded p-4 mb-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-950">Official Links and Contact</h2>
                  <p className="text-sm text-gray-600">Home page, launcher, community channels, and ownership contact signals for {server.name}.</p>
                </div>
                {!isOwned ? (
                  <a href="#claim-listing" className="text-sm font-semibold text-blue-700 hover:underline">
                    Claim to add more
                  </a>
                ) : null}
              </div>
              {hasOfficialLinks ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {officialWebsiteHref ? <ContactLink label="Official Website" value={server.website_url || server.external_launch_url} href={officialWebsiteHref} /> : null}
                  {launcherHref ? <ContactLink label="Launcher or Client" value={server.launcher_url} href={launcherHref} /> : null}
                  {trailerHref ? <ContactLink label="Trailer or Video" value={server.trailer_url} href={trailerHref} /> : null}
                  {discordHref ? <ContactLink label="Discord" value={server.contact_discord} href={discordHref} /> : null}
                  {forumHref ? <ContactLink label="Forum or Community" value={server.forum_url || server.community_url} href={forumHref} /> : null}
                  {ownerContact ? <ContactLink label="Owner Contact" value={ownerContact} /> : null}
                </div>
              ) : (
                <DirectoryEmptyState
                  title="Official links have not been mapped yet"
                  body="This is where the page improves on older server lists: owners can add a home page, launcher, Discord, forum, screenshots, rules, and support contact after claiming the listing."
                  action="Needed: website, Discord, forum, client download, owner contact"
                />
              )}
            </section>

            {referenceSources.length ? (
              <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Reference sources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {referenceSources.map((source) => (
                    <TrustedExternalLink
                      key={`${source.type || 'source'}-${source.url}`}
                      href={source.url}
                      label={source.label}
                      expectedDomains={expectedDomains}
                      className="rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm hover:border-gray-400 hover:bg-white hover:no-underline"
                    />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="border border-gray-200 rounded p-4 mb-6">
              <h2 className="text-lg font-bold text-gray-950 mb-3">Explore similar Open Tibia worlds</h2>
              <div className="flex flex-wrap gap-2">
                <Link href="/" className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                  Open Tibia server directory
                </Link>
                <Link href="/resources" className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                  Open Tibia tools and resources
                </Link>
                <Link href="/otland" className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                  OTLand server launch guide
                </Link>
                {server.version ? (
                  <Link href={`/servers/client/${String(server.version).replace(/\./g, '-')}`} className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                    Tibia {server.version} Open Tibia servers
                  </Link>
                ) : null}
                {server.location ? (
                  <Link href={`/servers/country/${String(server.location).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="rounded border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                    {server.location} Open Tibia servers
                  </Link>
                ) : null}
              </div>
            </section>

            <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Distinctive features</h2>
                {server.feature_bullets?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {server.feature_bullets.map((feature) => (
                      <div key={feature} className="border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        {feature}
                      </div>
                    ))}
                  </div>
                ) : (
                  <DirectoryEmptyState
                  title="Unique details are waiting for owner or editorial enrichment"
                  body="Good listings should explain the map style, rates, PvP rules, client version, custom systems, launch status, anti-cheat stance, events, and why players should care."
                  action="Needed: custom systems, launch notes, rates, PvP policy, community features"
                />
                )}
            </section>

            {Array.isArray(server.custom_sections) && server.custom_sections.length ? (
              <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Server notes</h2>
                <div className="space-y-4">
                  {server.custom_sections.map((section, index) => (
                    <div key={`${section.title || 'section'}-${index}`} className="border border-gray-200 rounded p-4">
                      <h3 className="text-base font-bold text-gray-950 mb-2">{section.title || `Section ${index + 1}`}</h3>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{section.body || '-'}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {Array.isArray(server.faq_items) && server.faq_items.length ? (
              <section className="border border-gray-200 rounded p-4 mb-6">
                <h2 className="text-lg font-bold text-gray-950 mb-3">Questions players ask first</h2>
                <div className="space-y-3">
                  {server.faq_items.map((item, index) => (
                    <div key={`${item.question || 'faq'}-${index}`} className="border border-gray-200 rounded p-4">
                      <h3 className="text-sm font-bold text-gray-950 mb-2">{item.question || `Question ${index + 1}`}</h3>
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.answer || '-'}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="border border-gray-200 rounded p-4 mb-6">
              <h2 className="text-lg font-bold text-gray-950 mb-3">Verified screenshots</h2>
              {galleryImages.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {galleryImages.map((imageUrl) => (
                    <a key={imageUrl} href={imageUrl} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded border border-gray-200 bg-gray-50 hover:border-gray-400 hover:no-underline">
                      <div className="aspect-video bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imageUrl} alt={`${server.name} screenshot`} className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
                      </div>
                      <div className="px-3 py-2 text-xs text-gray-600 break-all">{imageUrl}</div>
                    </a>
                  ))}
                </div>
              ) : (
                <DirectoryEmptyState
                  title="Screenshots are waiting for verification"
                  body="Useful server pages should show the real client, map areas, website, events, bosses, trainers, depot, and custom systems. Until media is verified, this page keeps the gallery empty instead of showing unrelated images."
                  action="Best additions: homepage screenshots, gameplay images, launch graphics, trailer"
                />
              )}
            </section>

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

        {canEditListing ? (
          <section className="bg-white border border-gray-200 rounded p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-950 mb-2">Owner listing editor</h2>
            <p className="text-sm text-gray-600 mb-5">
              Permission-based editing is enabled because this listing is attached to your account. Imported otservlist data stays intact while these fields control the public presentation layer.
            </p>
            <form onSubmit={saveOwnerTemplate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Template</label>
                <select
                  value={ownerEditor.template_name}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, template_name: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  <option value="directory_pro">Directory Pro</option>
                  <option value="launch_focus">Launch Focus</option>
                  <option value="community_first">Community First</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Discord</label>
                <input
                  value={ownerEditor.contact_discord}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, contact_discord: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="discord.gg/example or handle"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Headline</label>
                <input
                  value={ownerEditor.promo_headline}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, promo_headline: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Subheadline</label>
                <textarea
                  value={ownerEditor.promo_subheadline}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, promo_subheadline: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[96px]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Launcher URL</label>
                <input
                  value={ownerEditor.launcher_url}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, launcher_url: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Trailer URL</label>
                <input
                  value={ownerEditor.trailer_url}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, trailer_url: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feature Bullets</label>
                <textarea
                  value={ownerEditor.feature_bullets}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, feature_bullets: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[140px]"
                  placeholder="One feature per line"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gallery URLs</label>
                <textarea
                  value={ownerEditor.gallery_images}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, gallery_images: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[140px]"
                  placeholder="One image URL per line"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">FAQ JSON</label>
                <textarea
                  value={ownerEditor.faq_items}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, faq_items: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[160px] font-mono"
                  placeholder='[{"question":"How do I join?","answer":"Download the launcher and create an account."}]'
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Custom Sections JSON</label>
                <textarea
                  value={ownerEditor.custom_sections}
                  onChange={(event) => setOwnerEditor((current) => ({ ...current, custom_sections: event.target.value }))}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm min-h-[180px] font-mono"
                  placeholder='[{"title":"PvP Rules","body":"Explain skulls, frag system, and anti-bot rules here."}]'
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="px-4 py-2 bg-gray-950 text-white rounded font-semibold hover:opacity-85">
                  Save Listing Template
                </button>
              </div>
            </form>
          </section>
        ) : null}

        {communityNotice ? <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-4">{communityNotice}</div> : null}
        {communityError ? <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded mb-4">{communityError}</div> : null}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <section id="claim-listing" className="bg-white border border-gray-200 rounded p-4">
            <h2 className="text-lg font-bold text-gray-950 mb-2">Claim this listing</h2>
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
              {!communityLoading && reviews.length === 0 ? <p className="text-sm text-gray-600">Player reviews will appear here after registered users share recent, specific experience with this server.</p> : null}
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
              {!communityLoading && messages.length === 0 ? <p className="text-sm text-gray-600">Server questions, corrections, and community updates will appear here once players start the discussion.</p> : null}
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
    <AuthModal
      open={authOpen}
      mode={authMode}
      onClose={() => setAuthOpen(false)}
      onSuccess={() => loadCommunity()}
    />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="telemetry-tile p-4">
      <p className="text-xs text-slate-400 uppercase font-bold mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function ContactLink({ label, value, href }) {
  const content = (
    <>
      <div className="text-xs font-bold uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-gray-950 break-words">{value}</div>
    </>
  );

  if (!href) {
    return <div className="rounded border border-gray-200 bg-gray-50 p-4">{content}</div>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="rounded border border-gray-200 bg-gray-50 p-4 hover:border-gray-400 hover:no-underline">
      {content}
    </a>
  );
}
