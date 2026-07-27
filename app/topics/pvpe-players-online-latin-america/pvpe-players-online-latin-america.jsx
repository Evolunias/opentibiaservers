import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-latin-america');
}

export default function PvpePlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-latin-america" />;
}
