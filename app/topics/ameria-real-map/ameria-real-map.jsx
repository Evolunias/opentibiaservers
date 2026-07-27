import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map');
}

export default function AmeriaRealMapKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map" />;
}
