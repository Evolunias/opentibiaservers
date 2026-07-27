import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-poland');
}

export default function MarolaotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-poland" />;
}
