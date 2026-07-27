import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-europe');
}

export default function AmeriaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-europe" />;
}
