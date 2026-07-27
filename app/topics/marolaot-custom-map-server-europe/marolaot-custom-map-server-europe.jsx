import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-server-europe');
}

export default function MarolaotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-server-europe" />;
}
