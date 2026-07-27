import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-latin-america');
}

export default function PvpDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-latin-america" />;
}
