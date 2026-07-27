import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-brazil');
}

export default function MarolaotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-brazil" />;
}
