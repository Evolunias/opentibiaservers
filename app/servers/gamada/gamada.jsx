import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-gamada",
  "slug": "gamada",
  "name": "Gamada",
  "host": "gamadaot.com",
  "ip": "gamadaot.com",
  "port": 7171,
  "location": "Sweden",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 106,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/sweden-7-4-low-mid-rates-gamada-opens-on-january-2nd-at-18-00-gmt.303579/",
  "source_url": "https://otland.net/threads/sweden-7-4-low-mid-rates-gamada-opens-on-january-2nd-at-18-00-gmt.303579/",
  "website_url": "https://gamadaot.com",
  "external_launch_url": "https://gamadaot.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Gamada",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.653Z",
  "last_seen_at": "2025-12-29T01:44:39+0100",
  "last_check": "2026-07-28T02:51:27.653Z",
  "official_summary": "Gamada enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Sweden, version hint: 7.4, server address: gamadaot.com, port 7171, 12 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Gamada is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://gamadaot.com",
    "Server address: gamadaot.com",
    "Server port: 7171",
    "Thread author: Gamada",
    "Original post date: 12/29/2025",
    "Forum discussion: 12 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: Sweden"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Sweden",
    "7.4",
    "Sweden",
    "7.4",
    "Low/Mid Rates"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://gamadaot.com",
      "label": "Gamada official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/sweden-7-4-low-mid-rates-gamada-opens-on-january-2nd-at-18-00-gmt.303579/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://gamadaot.com",
      "label": "https://gamadaot.com"
    }
  ],
  "faq_items": [
    {
      "question": "Is Gamada verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://gamadaot.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Gamada?",
      "answer": "Start with https://gamadaot.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Gamada exposes https://gamadaot.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function GamadaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
