import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-europe');
}

export default function MarolaotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-europe" />;
}
