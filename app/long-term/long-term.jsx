import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-long-term",
  "slug": "long-term",
  "name": "Long-term",
  "host": "iglaots.net",
  "ip": "iglaots.net",
  "port": 7171,
  "location": "POLAND",
  "version": "15",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 71,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/poland-15-20-long-term-iglaots-task-board-weapon-proficiency-new-offseason-start-27th-march-19-00-cet.288239/",
  "source_url": "https://otland.net/threads/poland-15-20-long-term-iglaots-task-board-weapon-proficiency-new-offseason-start-27th-march-19-00-cet.288239/",
  "website_url": "https://iglaots.net/",
  "external_launch_url": "https://iglaots.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Long-term",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2024-03-10T12:12:29+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Long-term enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 15, server address: iglaots.net, port 7171, 207 replies, 36,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Long-term is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://iglaots.net/",
    "Server address: iglaots.net",
    "Server port: 7171",
    "Thread author: onewave1",
    "Original post date: 3/10/2024",
    "Forum discussion: 207 replies",
    "Thread visibility: 36,000 views",
    "Parsed version/client hint: 15",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "POLAND",
    "15",
    "POLAND",
    "15.20"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://iglaots.net/",
      "label": "Long-term official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/poland-15-20-long-term-iglaots-task-board-weapon-proficiency-new-offseason-start-27th-march-19-00-cet.288239/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://iglaots.net/",
      "label": "https://iglaots.net/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/50c5879564fbb86a5b2a2bf222657b55",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/a87d29289af8c6d13890b26edd75129a",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/f7506ce73c5e44b4f5b5d6a3873032a4",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/lakierek",
      "label": "lakierek"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Daffko",
      "label": "Daffko"
    }
  ],
  "faq_items": [
    {
      "question": "Is Long-term verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://iglaots.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Long-term?",
      "answer": "Start with https://iglaots.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Long-term exposes https://iglaots.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function LongTermPage() {
  return <CuratedGuideArticle page={page} />;
}
