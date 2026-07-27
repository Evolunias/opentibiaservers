import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-uk');
}

export default function PvpePlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-uk" />;
}
