import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-germany');
}

export default function MarolaotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-germany" />;
}
