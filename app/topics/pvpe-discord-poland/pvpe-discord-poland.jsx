import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-discord-poland');
}

export default function PvpeDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-discord-poland" />;
}
