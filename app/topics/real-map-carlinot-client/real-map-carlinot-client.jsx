import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-client');
}

export default function RealMapCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-client" />;
}
