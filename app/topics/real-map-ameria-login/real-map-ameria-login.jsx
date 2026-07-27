import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-login');
}

export default function RealMapAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-login" />;
}
