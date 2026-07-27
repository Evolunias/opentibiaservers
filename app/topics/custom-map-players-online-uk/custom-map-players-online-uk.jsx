import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-uk');
}

export default function CustomMapPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-uk" />;
}
