import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-canada');
}

export default function NonPvpDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-canada" />;
}
