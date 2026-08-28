import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-8-0-freebia-online-lowrate-20-06-2026",
  "slug": "8-0-freebia-online-lowrate-20-06-2026",
  "name": "8.0 Freebia Online lowrate 20/06/2026",
  "host": "freebia.online",
  "ip": "freebia.online",
  "port": 7171,
  "location": "Germany",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 60,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://freebia.online",
  "external_launch_url": "https://freebia.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "8.0 Freebia Online lowrate 20/06/2026",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2026-06-21T13:48:24+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "8.0 Freebia Online lowrate 20/06/2026 enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8, server address: freebia.online, port 7171, official website reachable during import, 5 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "8.0 Freebia Online lowrate 20/06/2026 is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://freebia.online",
    "Official website responded with HTTP 200",
    "Server address: freebia.online",
    "Server port: 7171",
    "Thread author: Chaos2b2tibia",
    "Original post date: 6/21/2026",
    "Forum discussion: 5 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Germany",
    "8",
    "Germany",
    "pvp-e"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://freebia.online",
      "label": "8.0 Freebia Online lowrate 20/06/2026 official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://freebia.online",
      "label": "https://freebia.online"
    }
  ],
  "faq_items": [
    {
      "question": "Is 8.0 Freebia Online lowrate 20/06/2026 verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://freebia.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm 8.0 Freebia Online lowrate 20/06/2026?",
      "answer": "Start with https://freebia.online and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "8.0 Freebia Online lowrate 20/06/2026 exposes https://freebia.online from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function Exact80FreebiaOnlineLowrate20062026Page() {
  return <CuratedGuideArticle page={page} />;
}
