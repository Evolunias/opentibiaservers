import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-mexico');
}

export default function CustomMapPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-mexico" />;
}
