import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-spells');
}

export default function AmeriaSpellsKeywordPage() {
  return <StaticKeywordPage slug="ameria-spells" />;
}
