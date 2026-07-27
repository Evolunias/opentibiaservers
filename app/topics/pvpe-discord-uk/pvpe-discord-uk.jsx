import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-uk');
}

export default function PvpeDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-uk" />;
}
