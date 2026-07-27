import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-north-america');
}

export default function AmeriaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-north-america" />;
}
