import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-client');
}

export default function RealMapTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-client" />;
}
