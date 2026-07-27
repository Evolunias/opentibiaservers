import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-mexico');
}

export default function PvpePlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-mexico" />;
}
