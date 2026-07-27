import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-server');
}

export default function RealMapRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-server" />;
}
