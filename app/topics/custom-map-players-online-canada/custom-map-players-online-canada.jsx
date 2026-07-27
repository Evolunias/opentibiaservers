import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-canada');
}

export default function CustomMapPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-canada" />;
}
