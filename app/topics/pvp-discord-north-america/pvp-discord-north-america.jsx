import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-north-america');
}

export default function PvpDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-north-america" />;
}
