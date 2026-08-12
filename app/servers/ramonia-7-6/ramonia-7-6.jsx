import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-ramonia-7-6",
  "slug": "ramonia-7-6",
  "name": "Ramonia 7.6",
  "host": "ramonia.net",
  "ip": "ramonia.net",
  "port": 7873,
  "location": "France",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 24,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-custom-ramonia-7-6-400-online-last-season-free-pacc-start-may-8.302875/",
  "source_url": "https://otland.net/threads/france-custom-ramonia-7-6-400-online-last-season-free-pacc-start-may-8.302875/",
  "website_url": "https://ramonia.net",
  "external_launch_url": "https://ramonia.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ramonia 7.6",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2025-11-28T16:05:10+0100",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Ramonia 7.6 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 7.6, server address: ramonia.net, port 7873, official website reachable during import, 52 replies, 8,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Ramonia 7.6 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://ramonia.net",
    "Official website responded with HTTP 200",
    "Server address: ramonia.net",
    "Server port: 7873",
    "Thread author: Arahnus",
    "Original post date: 11/28/2025",
    "Forum discussion: 52 replies",
    "Thread visibility: 8,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "7.6",
    "France",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://ramonia.net",
      "label": "Ramonia 7.6 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-custom-ramonia-7-6-400-online-last-season-free-pacc-start-may-8.302875/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://ramonia.net",
      "label": "https://ramonia.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is Ramonia 7.6 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://ramonia.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Ramonia 7.6?",
      "answer": "Start with https://ramonia.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Ramonia 7.6 exposes https://ramonia.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Ramonia76ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
