import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-forge-of-elements-multi-world-8-7",
  "slug": "forge-of-elements-multi-world-8-7",
  "name": "Forge of Elements: & & Multi-world []8.7[]",
  "host": null,
  "ip": null,
  "port": null,
  "location": "USA",
  "version": null,
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 83,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-forge-of-elements-death-souls-havoc-multi-world-8-7.112929/",
  "source_url": "https://otland.net/threads/usa-forge-of-elements-death-souls-havoc-multi-world-8-7.112929/",
  "website_url": "https://otland.net/threads/usa-forge-of-elements-death-souls-havoc-multi-world-8-7.112929/",
  "external_launch_url": "https://otland.net/threads/usa-forge-of-elements-death-souls-havoc-multi-world-8-7.112929/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Forge of Elements: & & Multi-world []8.7[]",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2010-12-22T20:24:32+0100",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Forge of Elements: & & Multi-world []8.7[] enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, 58 replies, 17,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Forge of Elements: & & Multi-world []8.7[] is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: Karain",
    "Original post date: 12/23/2010",
    "Forum discussion: 58 replies",
    "Thread visibility: 17,000 views",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "USA",
    "Death",
    "Souls",
    "Havoc"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-forge-of-elements-death-souls-havoc-multi-world-8-7.112929/",
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
      "question": "Is Forge of Elements: & & Multi-world []8.7[] verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Forge of Elements: & & Multi-world []8.7[]?",
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

export default function ForgeOfElementsMultiWorld87Page() {
  return <CuratedGuideArticle page={page} />;
}
