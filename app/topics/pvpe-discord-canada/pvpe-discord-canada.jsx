import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-canada');
}

export default function PvpeDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-canada" />;
}
