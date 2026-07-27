import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-poland');
}

export default function MarolaotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-poland" />;
}
