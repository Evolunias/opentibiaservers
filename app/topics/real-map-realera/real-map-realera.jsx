import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera');
}

export default function RealMapRealeraKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera" />;
}
