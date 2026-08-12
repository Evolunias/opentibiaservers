import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-thorz-ot",
  "slug": "thorz-ot",
  "name": "Thorz OT",
  "host": "thorz-ot.se",
  "ip": "thorz-ot.se",
  "port": 7171,
  "location": "Sweden",
  "version": "7.72",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 110,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/sweden-7-72-rl-map-thorz-ot.303677/",
  "source_url": "https://otland.net/threads/sweden-7-72-rl-map-thorz-ot.303677/",
  "website_url": "https://thorz-ot.se",
  "external_launch_url": "https://thorz-ot.se",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Thorz OT",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2026-01-12T18:09:56+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "Thorz OT enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Sweden, version hint: 7.72, server address: thorz-ot.se, port 7171, 10 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Thorz OT is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://thorz-ot.se",
    "Server address: thorz-ot.se",
    "Server port: 7171",
    "Thread author: Mr Tuzzz",
    "Original post date: 1/13/2026",
    "Forum discussion: 10 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7.72",
    "Parsed region hint: Sweden"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Sweden",
    "7.72",
    "Sweden",
    "7.72",
    "RL Map"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://thorz-ot.se",
      "label": "Thorz OT official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/sweden-7-72-rl-map-thorz-ot.303677/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://thorz-ot.se",
      "label": "https://thorz-ot.se"
    }
  ],
  "faq_items": [
    {
      "question": "Is Thorz OT verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://thorz-ot.se as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Thorz OT?",
      "answer": "Start with https://thorz-ot.se and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Thorz OT exposes https://thorz-ot.se from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ThorzOtServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
