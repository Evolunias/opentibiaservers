import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibia-8-0-low-rate",
  "slug": "tibia-8-0-low-rate",
  "name": "Tibia 8.0 Low Rate",
  "host": "goldenots.com",
  "ip": "goldenots.com",
  "port": 7171,
  "location": "France",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 112,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-europe-8-0-real-map-tibia-8-0-low-rate-real-server-7-february-2025-20-00-cet.303833/",
  "source_url": "https://otland.net/threads/france-europe-8-0-real-map-tibia-8-0-low-rate-real-server-7-february-2025-20-00-cet.303833/",
  "website_url": "https://goldenots.com",
  "external_launch_url": "https://goldenots.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibia 8.0 Low Rate",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2026-02-04T19:04:15+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "Tibia 8.0 Low Rate enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 8, server address: goldenots.com, port 7171, 8 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Tibia 8.0 Low Rate is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://goldenots.com",
    "Server address: goldenots.com",
    "Server port: 7171",
    "Thread author: Just Pietros",
    "Original post date: 2/5/2026",
    "Forum discussion: 8 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "8",
    "France",
    "EUROPE",
    "8.0",
    "Real Map",
    "7 February 2025 20:00 CET"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://goldenots.com",
      "label": "Tibia 8.0 Low Rate official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-europe-8-0-real-map-tibia-8-0-low-rate-real-server-7-february-2025-20-00-cet.303833/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://goldenots.com",
      "label": "https://goldenots.com"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Natraf",
      "label": "Natraf"
    }
  ],
  "faq_items": [
    {
      "question": "Is Tibia 8.0 Low Rate verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://goldenots.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Tibia 8.0 Low Rate?",
      "answer": "Start with https://goldenots.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Tibia 8.0 Low Rate exposes https://goldenots.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
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

export default function Tibia80LowRateServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
