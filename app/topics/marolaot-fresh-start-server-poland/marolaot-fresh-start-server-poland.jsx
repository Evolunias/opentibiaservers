import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-poland');
}

export default function MarolaotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-poland" />;
}
