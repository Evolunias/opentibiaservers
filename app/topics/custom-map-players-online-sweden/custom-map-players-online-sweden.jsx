import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-sweden');
}

export default function CustomMapPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-sweden" />;
}
