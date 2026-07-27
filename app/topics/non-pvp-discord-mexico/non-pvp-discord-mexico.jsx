import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-discord-mexico');
}

export default function NonPvpDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-discord-mexico" />;
}
