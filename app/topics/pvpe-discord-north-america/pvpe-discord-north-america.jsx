import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-north-america');
}

export default function PvpeDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-north-america" />;
}
