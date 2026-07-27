import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-south-america');
}

export default function MarolaotCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-south-america" />;
}
