import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-server');
}

export default function RealMapOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-server" />;
}
