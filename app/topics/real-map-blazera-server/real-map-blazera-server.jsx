import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-server');
}

export default function RealMapBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-server" />;
}
