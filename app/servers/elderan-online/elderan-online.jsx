import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-elderan-online",
  "slug": "elderan-online",
  "name": "Elderan Online",
  "host": "elderan.online",
  "ip": "elderan.online",
  "port": 7171,
  "location": "USA",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 78,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-7-72-elderan-online-brand-new-server-nova-10th-april-2026.283302/",
  "source_url": "https://otland.net/threads/usa-7-72-elderan-online-brand-new-server-nova-10th-april-2026.283302/",
  "website_url": "https://elderan.online",
  "external_launch_url": "https://elderan.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Elderan Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2022-12-16T09:30:02+0100",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Elderan Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 8, server address: elderan.online, port 7171, 83 replies, 20,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Elderan Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://elderan.online",
    "Server address: elderan.online",
    "Server port: 7171",
    "Thread author: alysonbiersacky",
    "Original post date: 12/16/2022",
    "Forum discussion: 83 replies",
    "Thread visibility: 20,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "8",
    "USA",
    "7.72"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://elderan.online",
      "label": "Elderan Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-7-72-elderan-online-brand-new-server-nova-10th-april-2026.283302/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://elderan.online",
      "label": "https://elderan.online"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/a/iWudvq6",
      "label": "https://imgur.com/a/iWudvq6"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Wizium",
      "label": "Wizium"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Krakus",
      "label": "Krakus"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/goshnaar",
      "label": "goshnaar"
    }
  ],
  "faq_items": [
    {
      "question": "Is Elderan Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://elderan.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Elderan Online?",
      "answer": "Start with https://elderan.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Elderan Online exposes https://elderan.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/a/iWudvq6. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function ElderanOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
