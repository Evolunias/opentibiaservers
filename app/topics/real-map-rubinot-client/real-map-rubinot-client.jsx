import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-client');
}

export default function RealMapRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-client" />;
}
