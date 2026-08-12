import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-chaos-reborn",
  "slug": "chaos-reborn",
  "name": "Chaos Reborn",
  "host": "otchaosreborn.zapto.org",
  "ip": "otchaosreborn.zapto.org",
  "port": 7171,
  "location": "USA",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 119,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-6-chaos-reborn-custom-map-custom-spells-custom-monsters-reborn-system-tasks-custom-vocations-dedicated-host-24-7.303929/",
  "source_url": "https://otland.net/threads/usa-7-6-chaos-reborn-custom-map-custom-spells-custom-monsters-reborn-system-tasks-custom-vocations-dedicated-host-24-7.303929/",
  "website_url": "http://otchaosreborn.zapto.org/",
  "external_launch_url": "http://otchaosreborn.zapto.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Chaos Reborn",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.704Z",
  "last_seen_at": "2026-02-15T14:17:36+0100",
  "last_check": "2026-07-28T02:51:24.704Z",
  "official_summary": "Chaos Reborn enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.6, server address: otchaosreborn.zapto.org, port 7171, 6 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Chaos Reborn is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://otchaosreborn.zapto.org/",
    "Server address: otchaosreborn.zapto.org",
    "Server port: 7171",
    "Thread author: Bezos",
    "Original post date: 2/15/2026",
    "Forum discussion: 6 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "7.6",
    "USA",
    "7.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://otchaosreborn.zapto.org/",
      "label": "Chaos Reborn official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-6-chaos-reborn-custom-map-custom-spells-custom-monsters-reborn-system-tasks-custom-vocations-dedicated-host-24-7.303929/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://otchaosreborn.zapto.org/",
      "label": "http://otchaosreborn.zapto.org/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/fridaii",
      "label": "fridaii"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/fridai__",
      "label": "fridai__"
    }
  ],
  "faq_items": [
    {
      "question": "Is Chaos Reborn verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://otchaosreborn.zapto.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Chaos Reborn?",
      "answer": "Start with http://otchaosreborn.zapto.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Chaos Reborn exposes http://otchaosreborn.zapto.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function ChaosRebornServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
