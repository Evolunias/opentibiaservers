import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-spells');
}

export default function MarolaotSpellsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-spells" />;
}
