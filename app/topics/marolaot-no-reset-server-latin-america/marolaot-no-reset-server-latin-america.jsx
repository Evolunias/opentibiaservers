import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-no-reset-server-latin-america');
}

export default function MarolaotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-no-reset-server-latin-america" />;
}
