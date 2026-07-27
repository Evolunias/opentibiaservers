import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-client');
}

export default function RealMapBlazeraClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-client" />;
}
