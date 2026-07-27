import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-mexico');
}

export default function PvpeDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-mexico" />;
}
