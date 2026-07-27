import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-map');
}

export default function AmeriaMapKeywordPage() {
  return <StaticKeywordPage slug="ameria-map" />;
}
