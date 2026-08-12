import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-monzera-10-98",
  "slug": "monzera-10-98",
  "name": "Monzera 10.98",
  "host": null,
  "ip": null,
  "port": null,
  "location": "Finland",
  "version": "Custom",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 138,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/finland-custom-monzera-10-98-rpg-pvp-attributes-custom-map.301362/",
  "source_url": "https://otland.net/threads/finland-custom-monzera-10-98-rpg-pvp-attributes-custom-map.301362/",
  "website_url": "https://otland.net/threads/finland-custom-monzera-10-98-rpg-pvp-attributes-custom-map.301362/",
  "external_launch_url": "https://otland.net/threads/finland-custom-monzera-10-98-rpg-pvp-attributes-custom-map.301362/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Monzera 10.98",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2025-10-17T00:20:14+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Monzera 10.98 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Finland, version hint: Custom, 2 replies, 967 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Monzera 10.98 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: denkan97",
    "Original post date: 10/17/2025",
    "Forum discussion: 2 replies",
    "Thread visibility: 967 views",
    "Parsed version/client hint: Custom",
    "Parsed region hint: Finland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Finland",
    "Custom",
    "Finland",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/finland-custom-monzera-10-98-rpg-pvp-attributes-custom-map.301362/",
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
      "question": "Is Monzera 10.98 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Monzera 10.98?",
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

export default function Monzera1098ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
