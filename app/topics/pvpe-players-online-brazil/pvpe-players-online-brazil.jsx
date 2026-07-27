import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-brazil');
}

export default function PvpePlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-brazil" />;
}
