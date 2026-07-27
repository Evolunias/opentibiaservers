import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ameria-servers');
}

export default function CustomMapAmeriaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ameria-servers" />;
}
