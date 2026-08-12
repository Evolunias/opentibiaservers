import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-grand-opening-of-whispers-of-solitude-30-1-2026",
  "slug": "grand-opening-of-whispers-of-solitude-30-1-2026",
  "name": "Grand opening of Whispers of solitude 30/1-2026",
  "host": null,
  "ip": null,
  "port": null,
  "location": "Canada",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 141,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-8-0-grand-opening-of-whispers-of-solitude-30-1-2026.303754/",
  "source_url": "https://otland.net/threads/canada-8-0-grand-opening-of-whispers-of-solitude-30-1-2026.303754/",
  "website_url": "https://otland.net/threads/canada-8-0-grand-opening-of-whispers-of-solitude-30-1-2026.303754/",
  "external_launch_url": "https://otland.net/threads/canada-8-0-grand-opening-of-whispers-of-solitude-30-1-2026.303754/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Grand opening of Whispers of solitude 30/1-2026",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.651Z",
  "last_seen_at": "2026-01-24T18:29:46+0100",
  "last_check": "2026-07-28T02:51:27.651Z",
  "official_summary": "Grand opening of Whispers of solitude 30/1-2026 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.0, 2 replies, 597 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Grand opening of Whispers of solitude 30/1-2026 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: Neelias",
    "Original post date: 1/25/2026",
    "Forum discussion: 2 replies",
    "Thread visibility: 597 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.0",
    "Canada",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-8-0-grand-opening-of-whispers-of-solitude-30-1-2026.303754/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    }
  ],
  "faq_items": [
    {
      "question": "Is Grand opening of Whispers of solitude 30/1-2026 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Grand opening of Whispers of solitude 30/1-2026?",
      "answer": "Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
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

export default function GrandOpeningOfWhispersOfSolitude3012026ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
