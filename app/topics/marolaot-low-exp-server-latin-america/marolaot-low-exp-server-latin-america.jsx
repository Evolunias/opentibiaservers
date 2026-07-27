import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-low-exp-server-latin-america');
}

export default function MarolaotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-low-exp-server-latin-america" />;
}
