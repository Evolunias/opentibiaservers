import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-server');
}

export default function RealMapRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-server" />;
}
