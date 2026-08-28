import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-crownots-start-on-feb-28th-18-00-cet",
  "slug": "crownots-start-on-feb-28th-18-00-cet",
  "name": "CrownOTS // Start on Feb 28th, 18:00 CET",
  "host": "crownots.eu",
  "ip": "crownots.eu",
  "port": 7171,
  "location": "Poland",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 27,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://crownots.eu",
  "external_launch_url": "https://crownots.eu",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "CrownOTS // Start on Feb 28th, 18:00 CET",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2025-02-21T18:40:32+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "CrownOTS // Start on Feb 28th, 18:00 CET enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 7.4, server address: crownots.eu, port 7171, official website reachable during import, 45 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "CrownOTS // Start on Feb 28th, 18:00 CET is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://crownots.eu",
    "Official website responded with HTTP 200",
    "Server address: crownots.eu",
    "Server port: 7171",
    "Thread author: PuszekLDZ",
    "Original post date: 2/22/2025",
    "Forum discussion: 45 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Poland",
    "7.4",
    "Poland",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://crownots.eu",
      "label": "CrownOTS // Start on Feb 28th, 18:00 CET official website"
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
      "url": "https://crownots.eu",
      "label": "https://crownots.eu"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/puszekgamer",
      "label": "puszekgamer"
    }
  ],
  "faq_items": [
    {
      "question": "Is CrownOTS // Start on Feb 28th, 18:00 CET verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://crownots.eu as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm CrownOTS // Start on Feb 28th, 18:00 CET?",
      "answer": "Start with https://crownots.eu and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "CrownOTS // Start on Feb 28th, 18:00 CET exposes https://crownots.eu from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CrownotsStartOnFeb28th1800CetPage() {
  return <CuratedGuideArticle page={page} />;
}
