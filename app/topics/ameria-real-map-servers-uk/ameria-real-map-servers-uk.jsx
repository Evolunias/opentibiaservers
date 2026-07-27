import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-uk');
}

export default function AmeriaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-uk" />;
}
