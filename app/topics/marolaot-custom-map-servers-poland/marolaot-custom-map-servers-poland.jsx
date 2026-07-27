import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-poland');
}

export default function MarolaotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-poland" />;
}
