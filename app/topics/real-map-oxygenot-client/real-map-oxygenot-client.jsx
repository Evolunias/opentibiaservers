import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-client');
}

export default function RealMapOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-client" />;
}
