import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-canada');
}

export default function AmeriaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-canada" />;
}
