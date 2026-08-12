import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-evozera",
  "slug": "evozera",
  "name": "EvoZera",
  "host": null,
  "ip": null,
  "port": null,
  "location": "POLAND",
  "version": "CUSTOM",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 143,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-custom-evozera-official-launch-10-07-2026-19-00-cet-talent-system-o-dungeons-o-bosses-o-enhanced-items-o-daily-activities.304927/",
  "source_url": "https://otland.net/threads/poland-custom-evozera-official-launch-10-07-2026-19-00-cet-talent-system-o-dungeons-o-bosses-o-enhanced-items-o-daily-activities.304927/",
  "website_url": "https://otland.net/threads/poland-custom-evozera-official-launch-10-07-2026-19-00-cet-talent-system-o-dungeons-o-bosses-o-enhanced-items-o-daily-activities.304927/",
  "external_launch_url": "https://otland.net/threads/poland-custom-evozera-official-launch-10-07-2026-19-00-cet-talent-system-o-dungeons-o-bosses-o-enhanced-items-o-daily-activities.304927/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "EvoZera",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.241Z",
  "last_seen_at": "2026-07-08T18:09:16+0200",
  "last_check": "2026-07-28T02:51:24.241Z",
  "official_summary": "EvoZera enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: CUSTOM, 2 replies, 446 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "EvoZera is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: evozeraot",
    "Original post date: 7/9/2026",
    "Forum discussion: 2 replies",
    "Thread visibility: 446 views",
    "Parsed version/client hint: CUSTOM",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "CUSTOM",
    "POLAND",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-custom-evozera-official-launch-10-07-2026-19-00-cet-talent-system-o-dungeons-o-bosses-o-enhanced-items-o-daily-activities.304927/",
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
      "question": "Is EvoZera verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm EvoZera?",
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

export default function EvozeraServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
