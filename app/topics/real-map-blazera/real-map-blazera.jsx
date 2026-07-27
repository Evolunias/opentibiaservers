import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera');
}

export default function RealMapBlazeraKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera" />;
}
