import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-high-exp-server-latin-america');
}

export default function MarolaotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-high-exp-server-latin-america" />;
}
