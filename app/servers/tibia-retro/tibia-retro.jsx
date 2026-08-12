import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibia-retro",
  "slug": "tibia-retro",
  "name": "Tibia-Retro",
  "host": null,
  "ip": null,
  "port": null,
  "location": "Canada",
  "version": "7.72",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 136,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-7-72-tibia-retro.304897/",
  "source_url": "https://otland.net/threads/canada-7-72-tibia-retro.304897/",
  "website_url": "https://otland.net/threads/canada-7-72-tibia-retro.304897/",
  "external_launch_url": "https://otland.net/threads/canada-7-72-tibia-retro.304897/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibia-Retro",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.805Z",
  "last_seen_at": "2026-07-05T14:56:44+0200",
  "last_check": "2026-07-28T02:51:23.805Z",
  "official_summary": "Tibia-Retro enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 7.72, 3 replies, 486 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Tibia-Retro is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: Adm Eddie",
    "Original post date: 7/5/2026",
    "Forum discussion: 3 replies",
    "Thread visibility: 486 views",
    "Parsed version/client hint: 7.72",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "7.72",
    "Canada",
    "7.72"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-7-72-tibia-retro.304897/",
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
      "question": "Is Tibia-Retro verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Tibia-Retro?",
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

export default function TibiaRetroServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
