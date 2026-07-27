import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-canada');
}

export default function MarolaotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-canada" />;
}
