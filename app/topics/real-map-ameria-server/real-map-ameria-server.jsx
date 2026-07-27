import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-server');
}

export default function RealMapAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-server" />;
}
