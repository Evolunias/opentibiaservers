import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ameria-server');
}

export default function CustomMapAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ameria-server" />;
}
