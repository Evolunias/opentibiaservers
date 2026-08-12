import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-valdareth-8-0-custom-war-server",
  "slug": "valdareth-8-0-custom-war-server",
  "name": "Valdareth 8.0 Custom WAR Server",
  "host": null,
  "ip": null,
  "port": null,
  "location": "USA",
  "version": null,
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 165,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-valdareth-feb-6th-3-pm-est-8-0-custom-war-server.303804/",
  "source_url": "https://otland.net/threads/usa-valdareth-feb-6th-3-pm-est-8-0-custom-war-server.303804/",
  "website_url": "https://otland.net/threads/usa-valdareth-feb-6th-3-pm-est-8-0-custom-war-server.303804/",
  "external_launch_url": "https://otland.net/threads/usa-valdareth-feb-6th-3-pm-est-8-0-custom-war-server.303804/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Valdareth 8.0 Custom WAR Server",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.652Z",
  "last_seen_at": "2026-02-01T22:40:52+0100",
  "last_check": "2026-07-28T02:51:27.652Z",
  "official_summary": "Valdareth 8.0 Custom WAR Server enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, 0 replies, 282 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Valdareth 8.0 Custom WAR Server is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: Rhagel",
    "Original post date: 2/2/2026",
    "Forum discussion: 0 replies",
    "Thread visibility: 282 views",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "USA",
    "Feb 6th - 3 PM EST"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-valdareth-feb-6th-3-pm-est-8-0-custom-war-server.303804/",
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
      "question": "Is Valdareth 8.0 Custom WAR Server verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Valdareth 8.0 Custom WAR Server?",
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

export default function Valdareth80CustomWarServerServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
