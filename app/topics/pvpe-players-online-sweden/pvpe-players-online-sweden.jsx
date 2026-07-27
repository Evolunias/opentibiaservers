import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-sweden');
}

export default function PvpePlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-sweden" />;
}
