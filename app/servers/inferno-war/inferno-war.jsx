import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-inferno-war",
  "slug": "inferno-war",
  "name": "Inferno-war",
  "host": null,
  "ip": null,
  "port": null,
  "location": "France",
  "version": "8.60",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 188,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-8-60-inferno-war-back-best-war-server-8-60.304278/",
  "source_url": "https://otland.net/threads/france-8-60-inferno-war-back-best-war-server-8-60.304278/",
  "website_url": "https://otland.net/threads/france-8-60-inferno-war-back-best-war-server-8-60.304278/",
  "external_launch_url": "https://otland.net/threads/france-8-60-inferno-war-back-best-war-server-8-60.304278/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Inferno-war",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.657Z",
  "last_seen_at": "2026-04-03T18:03:03+0200",
  "last_check": "2026-07-28T02:51:26.657Z",
  "official_summary": "Inferno-war enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 8.60, 0 replies, 96 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Inferno-war is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: student3312",
    "Original post date: 4/4/2026",
    "Forum discussion: 0 replies",
    "Thread visibility: 96 views",
    "Parsed version/client hint: 8.60",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "8.60",
    "France",
    "8.60"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-8-60-inferno-war-back-best-war-server-8-60.304278/",
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
      "question": "Is Inferno-war verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Inferno-war?",
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

export default function InfernoWarServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
