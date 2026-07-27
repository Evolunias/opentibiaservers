import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-latin-america');
}

export default function AmeriaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-latin-america" />;
}
