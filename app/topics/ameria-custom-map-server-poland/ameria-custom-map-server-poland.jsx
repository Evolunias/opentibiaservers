import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-poland');
}

export default function AmeriaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-poland" />;
}
