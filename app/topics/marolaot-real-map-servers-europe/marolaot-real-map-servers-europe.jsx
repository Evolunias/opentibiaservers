import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-europe');
}

export default function MarolaotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-europe" />;
}
