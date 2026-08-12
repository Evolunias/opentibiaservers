import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-vbest-pvp-wow",
  "slug": "vbest-pvp-wow",
  "name": "vbest Pvp-Wow",
  "host": null,
  "ip": null,
  "port": null,
  "location": "Germany",
  "version": "7.72",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 131,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-7-72-vbest-pvp-wow.303188/",
  "source_url": "https://otland.net/threads/germany-7-72-vbest-pvp-wow.303188/",
  "website_url": "https://otland.net/threads/germany-7-72-vbest-pvp-wow.303188/",
  "external_launch_url": "https://otland.net/threads/germany-7-72-vbest-pvp-wow.303188/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "vbest Pvp-Wow",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2025-12-11T18:25:40+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "vbest Pvp-Wow enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 7.72, 3 replies, 684 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "vbest Pvp-Wow is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: vbest",
    "Original post date: 12/12/2025",
    "Forum discussion: 3 replies",
    "Thread visibility: 684 views",
    "Parsed version/client hint: 7.72",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "7.72",
    "Germany",
    "7.72"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-7-72-vbest-pvp-wow.303188/",
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
      "question": "Is vbest Pvp-Wow verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm vbest Pvp-Wow?",
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

export default function VbestPvpWowServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
