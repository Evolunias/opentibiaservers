import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-germany');
}

export default function MarolaotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-germany" />;
}
