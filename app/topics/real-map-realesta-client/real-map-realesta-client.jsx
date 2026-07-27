import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-client');
}

export default function RealMapRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-client" />;
}
