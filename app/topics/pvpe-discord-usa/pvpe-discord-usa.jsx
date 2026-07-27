import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-usa');
}

export default function PvpeDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-usa" />;
}
