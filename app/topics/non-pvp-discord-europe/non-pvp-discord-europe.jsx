import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-europe');
}

export default function NonPvpDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-europe" />;
}
