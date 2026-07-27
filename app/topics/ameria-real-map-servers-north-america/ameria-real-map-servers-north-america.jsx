import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-north-america');
}

export default function AmeriaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-north-america" />;
}
