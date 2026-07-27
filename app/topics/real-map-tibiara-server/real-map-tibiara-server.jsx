import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-server');
}

export default function RealMapTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-server" />;
}
