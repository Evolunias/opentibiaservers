import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-argentina');
}

export default function PvpeDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-argentina" />;
}
