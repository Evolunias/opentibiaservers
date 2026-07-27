import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-brazil');
}

export default function AmeriaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-brazil" />;
}
