import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-whispers-of-solitude",
  "slug": "whispers-of-solitude",
  "name": "Whispers Of Solitude",
  "host": "on.whispersofsolitude.org",
  "ip": "on.whispersofsolitude.org",
  "port": 7171,
  "location": "US",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 114,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/us-8-0-whispers-of-solitude.304654/",
  "source_url": "https://otland.net/threads/us-8-0-whispers-of-solitude.304654/",
  "website_url": "https://whispersofsolitude.org/account/create",
  "external_launch_url": "https://whispersofsolitude.org/account/create",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Whispers Of Solitude",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.161Z",
  "last_seen_at": "2026-05-31T12:37:43+0200",
  "last_check": "2026-07-28T02:51:25.161Z",
  "official_summary": "Whispers Of Solitude enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: US, version hint: 8, server address: on.whispersofsolitude.org, port 7171, 7 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Whispers Of Solitude is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://whispersofsolitude.org/account/create",
    "Server address: on.whispersofsolitude.org",
    "Server port: 7171",
    "Thread author: Neelias",
    "Original post date: 5/31/2026",
    "Forum discussion: 7 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: US"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "US",
    "8",
    "US",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://whispersofsolitude.org/account/create",
      "label": "Whispers Of Solitude official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/us-8-0-whispers-of-solitude.304654/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://whispersofsolitude.org/account/create",
      "label": "https://whispersofsolitude.org/account/create"
    }
  ],
  "faq_items": [
    {
      "question": "Is Whispers Of Solitude verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://whispersofsolitude.org/account/create as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Whispers Of Solitude?",
      "answer": "Start with https://whispersofsolitude.org/account/create and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Whispers Of Solitude exposes https://whispersofsolitude.org/account/create from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function WhispersOfSolitudeServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
