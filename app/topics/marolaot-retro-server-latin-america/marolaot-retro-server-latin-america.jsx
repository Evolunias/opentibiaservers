import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-retro-server-latin-america');
}

export default function MarolaotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-retro-server-latin-america" />;
}
