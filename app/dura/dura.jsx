import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-dura",
  "slug": "dura",
  "name": "Dura",
  "host": "dura-online.com",
  "ip": "dura-online.com",
  "port": 7171,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 3,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-4-dura-a-harder-tibia-massively-customized-new-meta-long-term-regular-updates-never-reset-for-skilled-players.273335/",
  "source_url": "https://otland.net/threads/usa-7-4-dura-a-harder-tibia-massively-customized-new-meta-long-term-regular-updates-never-reset-for-skilled-players.273335/",
  "website_url": "https://dura-online.com/",
  "external_launch_url": "https://dura-online.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Dura",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.242Z",
  "last_seen_at": "2020-10-31T19:02:37+0100",
  "last_check": "2026-07-28T02:51:24.242Z",
  "official_summary": "Dura enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: dura-online.com, port 7171, official website reachable during import, 550 replies, 131,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Dura is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://dura-online.com/",
    "Official website responded with HTTP 200",
    "Server address: dura-online.com",
    "Server port: 7171",
    "Thread author: Dura Aris",
    "Original post date: 11/1/2020",
    "Forum discussion: 550 replies",
    "Thread visibility: 131,000 views",
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
      "url": "https://dura-online.com/",
      "label": "Dura official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-4-dura-a-harder-tibia-massively-customized-new-meta-long-term-regular-updates-never-reset-for-skilled-players.273335/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://dura-online.com/",
      "label": "https://dura-online.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Dura verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://dura-online.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Dura?",
      "answer": "Start with https://dura-online.com/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Dura exposes https://dura-online.com/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function DuraPage() {
  return <CuratedGuideArticle page={page} />;
}
