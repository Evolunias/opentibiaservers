import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-knightwatch",
  "slug": "knightwatch",
  "name": "Knightwatch",
  "host": "login.crevasse.app",
  "ip": "login.crevasse.app",
  "port": 7171,
  "location": "USA",
  "version": "7.8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 90,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-8-knightwatch-may-1-2026-1300-us-est.304446/",
  "source_url": "https://otland.net/threads/usa-7-8-knightwatch-may-1-2026-1300-us-est.304446/",
  "website_url": "https://knightwatch.crevasse.app",
  "external_launch_url": "https://knightwatch.crevasse.app",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Knightwatch",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2026-04-24T19:00:11+0200",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Knightwatch enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.8, server address: login.crevasse.app, port 7171, 28 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Knightwatch is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://knightwatch.crevasse.app",
    "Server address: login.crevasse.app",
    "Server port: 7171",
    "Thread author: Crevasse",
    "Original post date: 4/25/2026",
    "Forum discussion: 28 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 7.8",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.8",
    "USA",
    "7.8"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://knightwatch.crevasse.app",
      "label": "Knightwatch official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-8-knightwatch-may-1-2026-1300-us-est.304446/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://knightwatch.crevasse.app",
      "label": "https://knightwatch.crevasse.app"
    }
  ],
  "faq_items": [
    {
      "question": "Is Knightwatch verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://knightwatch.crevasse.app as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Knightwatch?",
      "answer": "Start with https://knightwatch.crevasse.app and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Knightwatch exposes https://knightwatch.crevasse.app from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function KnightwatchServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
