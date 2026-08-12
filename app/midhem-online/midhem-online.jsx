import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-midhem-online",
  "slug": "midhem-online",
  "name": "Midhem Online",
  "host": "midhem.com",
  "ip": "midhem.com",
  "port": 7173,
  "location": "Poland",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 9,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-0-midhem-online-tempra-may-1.283176/",
  "source_url": "https://otland.net/threads/poland-8-0-midhem-online-tempra-may-1.283176/",
  "website_url": "https://midhem.com",
  "external_launch_url": "https://midhem.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Midhem Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.278Z",
  "last_seen_at": "2022-12-05T19:12:43+0100",
  "last_check": "2026-07-28T02:51:23.278Z",
  "official_summary": "Midhem Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.0, server address: midhem.com, port 7173, official website reachable during import, 187 replies, 43,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Midhem Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://midhem.com",
    "Official website responded with HTTP 200",
    "Server address: midhem.com",
    "Server port: 7173",
    "Thread author: Sajgon",
    "Original post date: 12/6/2022",
    "Forum discussion: 187 replies",
    "Thread visibility: 43,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8.0",
    "Poland",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://midhem.com",
      "label": "Midhem Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-0-midhem-online-tempra-may-1.283176/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://midhem.com",
      "label": "https://midhem.com"
    },
    {
      "type": "source_link",
      "url": "https://github.com/TioLucho",
      "label": "TioLucho"
    }
  ],
  "faq_items": [
    {
      "question": "Is Midhem Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://midhem.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Midhem Online?",
      "answer": "Start with https://midhem.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Midhem Online exposes https://midhem.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function MidhemOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
