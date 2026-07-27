import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-mexico');
}

export default function PvpDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-mexico" />;
}
