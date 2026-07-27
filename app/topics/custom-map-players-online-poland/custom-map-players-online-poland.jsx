import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-poland');
}

export default function CustomMapPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-poland" />;
}
