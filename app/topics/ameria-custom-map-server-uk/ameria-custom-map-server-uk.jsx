import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-uk');
}

export default function AmeriaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-uk" />;
}
