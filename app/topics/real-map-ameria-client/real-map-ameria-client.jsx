import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-client');
}

export default function RealMapAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-client" />;
}
