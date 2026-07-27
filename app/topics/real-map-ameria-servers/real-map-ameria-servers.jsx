import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-servers');
}

export default function RealMapAmeriaServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-servers" />;
}
