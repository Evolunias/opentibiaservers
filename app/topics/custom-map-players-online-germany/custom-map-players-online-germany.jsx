import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-germany');
}

export default function CustomMapPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-germany" />;
}
