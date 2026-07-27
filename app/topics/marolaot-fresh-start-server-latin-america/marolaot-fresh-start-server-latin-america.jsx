import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-latin-america');
}

export default function MarolaotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-latin-america" />;
}
