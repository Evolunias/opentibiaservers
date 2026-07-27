import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-latin-america');
}

export default function NonPvpDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-latin-america" />;
}
