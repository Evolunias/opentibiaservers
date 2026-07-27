import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-sweden');
}

export default function RealMapPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-sweden" />;
}
