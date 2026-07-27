import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-argentina');
}

export default function AmeriaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-argentina" />;
}
