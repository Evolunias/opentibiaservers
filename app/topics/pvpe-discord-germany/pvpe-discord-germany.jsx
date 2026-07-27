import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-germany');
}

export default function PvpeDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-germany" />;
}
