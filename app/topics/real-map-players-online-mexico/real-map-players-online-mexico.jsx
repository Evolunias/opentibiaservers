import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-players-online-mexico');
}

export default function RealMapPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-players-online-mexico" />;
}
