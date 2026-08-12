import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-ikasera-war-launch-28-february",
  "slug": "ikasera-war-launch-28-february",
  "name": "Ikasera War – Launch 28 February",
  "host": null,
  "ip": null,
  "port": null,
  "location": "GERMANY",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 172,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-8-6-ikasera-war-launch-28-february-war-system-cast-creat-your-character-now.304023/",
  "source_url": "https://otland.net/threads/germany-8-6-ikasera-war-launch-28-february-war-system-cast-creat-your-character-now.304023/",
  "website_url": "https://otland.net/threads/germany-8-6-ikasera-war-launch-28-february-war-system-cast-creat-your-character-now.304023/",
  "external_launch_url": "https://otland.net/threads/germany-8-6-ikasera-war-launch-28-february-war-system-cast-creat-your-character-now.304023/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ikasera War – Launch 28 February",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2026-02-26T10:05:42+0100",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Ikasera War – Launch 28 February enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: GERMANY, version hint: 8.6, 0 replies, 247 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "Ikasera War – Launch 28 February is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: srhrich",
    "Original post date: 2/26/2026",
    "Forum discussion: 0 replies",
    "Thread visibility: 247 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: GERMANY"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "GERMANY",
    "8.6",
    "GERMANY",
    "8.6"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-8-6-ikasera-war-launch-28-february-war-system-cast-creat-your-character-now.304023/",
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
      "question": "Is Ikasera War – Launch 28 February verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Ikasera War – Launch 28 February?",
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

export default function IkaseraWarLaunch28FebruaryServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
