import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-server');
}

export default function RealMapDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-server" />;
}
