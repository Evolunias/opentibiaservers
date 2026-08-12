import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-hexadia",
  "slug": "hexadia",
  "name": "Hexadia",
  "host": "login.hexadia.online",
  "ip": "login.hexadia.online",
  "port": 7171,
  "location": "Canada",
  "version": "8.00",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 105,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-8-0-hexadia-mid-rate-classic-map-qol-start-10-04-2026-18-00-cet-13-00-est-15-00-brt.304272/",
  "source_url": "https://otland.net/threads/canada-8-0-hexadia-mid-rate-classic-map-qol-start-10-04-2026-18-00-cet-13-00-est-15-00-brt.304272/",
  "website_url": "https://www.hexadia.online/",
  "external_launch_url": "https://www.hexadia.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Hexadia",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2026-04-03T00:35:30+0200",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Hexadia enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.00, server address: login.hexadia.online, port 7171, 13 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Hexadia is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://www.hexadia.online/",
    "Server address: login.hexadia.online",
    "Server port: 7171",
    "Thread author: h3x",
    "Original post date: 4/3/2026",
    "Forum discussion: 13 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 8.00",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.00",
    "Canada",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.hexadia.online/",
      "label": "Hexadia official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-8-0-hexadia-mid-rate-classic-map-qol-start-10-04-2026-18-00-cet-13-00-est-15-00-brt.304272/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://www.hexadia.online/",
      "label": "https://www.hexadia.online/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Hexadia verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://www.hexadia.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Hexadia?",
      "answer": "Start with https://www.hexadia.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Hexadia exposes https://www.hexadia.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function HexadiaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
