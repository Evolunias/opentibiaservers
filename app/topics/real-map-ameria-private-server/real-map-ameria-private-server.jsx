import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-private-server');
}

export default function RealMapAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-private-server" />;
}
