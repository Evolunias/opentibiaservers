import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-europe');
}

export default function CustomMapPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-europe" />;
}
