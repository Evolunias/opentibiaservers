import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-client');
}

export default function RealMapRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-client" />;
}
