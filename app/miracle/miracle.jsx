import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-miracle",
  "slug": "miracle",
  "name": "Miracle",
  "host": "go.miracle74.com",
  "ip": "go.miracle74.com",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 69,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/",
  "source_url": "https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/",
  "website_url": "https://miracle74.com",
  "external_launch_url": "https://miracle74.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Miracle",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2024-05-26T17:00:37+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Miracle enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: go.miracle74.com, port 7171, 302 replies, 53,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Miracle is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://miracle74.com",
    "Server address: go.miracle74.com",
    "Server port: 7171",
    "Thread author: Jinwo",
    "Original post date: 5/26/2024",
    "Forum discussion: 302 replies",
    "Thread visibility: 53,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://miracle74.com",
      "label": "Miracle official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://miracle74.com",
      "label": "https://miracle74.com"
    }
  ],
  "faq_items": [
    {
      "question": "Is Miracle verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://miracle74.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Miracle?",
      "answer": "Start with https://miracle74.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Miracle exposes https://miracle74.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function MiraclePage() {
  return <CuratedGuideArticle page={page} />;
}
