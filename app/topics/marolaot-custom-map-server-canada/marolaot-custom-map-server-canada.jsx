import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-canada');
}

export default function MarolaotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-canada" />;
}
