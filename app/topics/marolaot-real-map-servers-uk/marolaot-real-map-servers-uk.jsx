import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-uk');
}

export default function MarolaotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-uk" />;
}
