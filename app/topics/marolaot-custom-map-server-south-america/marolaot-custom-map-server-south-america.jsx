import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-south-america');
}

export default function MarolaotCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-south-america" />;
}
