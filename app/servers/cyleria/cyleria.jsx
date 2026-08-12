import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-cyleria",
  "slug": "cyleria",
  "name": "Cyleria -",
  "host": null,
  "ip": null,
  "port": null,
  "location": "Poland",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 73,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-8-6-cyleria-10-07-2017-17-00.252845/",
  "source_url": "https://otland.net/threads/poland-8-6-cyleria-10-07-2017-17-00.252845/",
  "website_url": "https://otland.net/threads/poland-8-6-cyleria-10-07-2017-17-00.252845/",
  "external_launch_url": "https://otland.net/threads/poland-8-6-cyleria-10-07-2017-17-00.252845/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Cyleria -",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.653Z",
  "last_seen_at": "2017-07-04T18:22:50+0200",
  "last_check": "2026-07-28T02:51:27.653Z",
  "official_summary": "Cyleria - enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Poland, version hint: 8.6, 165 replies, 39,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Cyleria - is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: sasugan2",
    "Original post date: 7/5/2017",
    "Forum discussion: 165 replies",
    "Thread visibility: 39,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: Poland"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Poland",
    "8.6",
    "Poland",
    "8.6",
    "10.07.2017 - 17:00"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-8-6-cyleria-10-07-2017-17-00.252845/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/bO7OvPZ",
      "label": "https://imgur.com/bO7OvPZ"
    }
  ],
  "faq_items": [
    {
      "question": "Is Cyleria - verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm Cyleria -?",
      "answer": "Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/bO7OvPZ. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function CyleriaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
