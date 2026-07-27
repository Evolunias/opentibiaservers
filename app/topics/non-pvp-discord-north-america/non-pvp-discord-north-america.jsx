import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-north-america');
}

export default function NonPvpDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-north-america" />;
}
