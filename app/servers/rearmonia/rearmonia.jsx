import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-rearmonia",
  "slug": "rearmonia",
  "name": "ReArmonia",
  "host": "rearmonia.org",
  "ip": "rearmonia.org",
  "port": 7171,
  "location": "France",
  "version": "7.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 102,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/france-7-6-rearmonia-proxies-fast-attack-unique-systems-23rd-december-20-00-cet.291858/",
  "source_url": "https://otland.net/threads/france-7-6-rearmonia-proxies-fast-attack-unique-systems-23rd-december-20-00-cet.291858/",
  "website_url": "https://rearmonia.org/",
  "external_launch_url": "https://rearmonia.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "ReArmonia",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:28.331Z",
  "last_seen_at": "2025-06-03T22:34:20+0200",
  "last_check": "2026-07-28T02:51:28.331Z",
  "official_summary": "ReArmonia enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: France, version hint: 7.6, server address: rearmonia.org, port 7171, 14 replies, 5,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "ReArmonia is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://rearmonia.org/",
    "Server address: rearmonia.org",
    "Server port: 7171",
    "Thread author: Mr Nuke",
    "Original post date: 6/4/2025",
    "Forum discussion: 14 replies",
    "Thread visibility: 5,000 views",
    "Parsed version/client hint: 7.6",
    "Parsed region hint: France"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "France",
    "7.6",
    "France",
    "7.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://rearmonia.org/",
      "label": "ReArmonia official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/france-7-6-rearmonia-proxies-fast-attack-unique-systems-23rd-december-20-00-cet.291858/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://rearmonia.org/",
      "label": "https://rearmonia.org/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/5f8bcc25665b63f072d66125b5af1fc2",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/24a0e619ec178abf8e65d3768ab962fa",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/b7a5066b09a3739bef9dc2987156fbf2",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Sorky96",
      "label": "Sorky96"
    }
  ],
  "faq_items": [
    {
      "question": "Is ReArmonia verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://rearmonia.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm ReArmonia?",
      "answer": "Start with https://rearmonia.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "ReArmonia exposes https://rearmonia.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function RearmoniaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
