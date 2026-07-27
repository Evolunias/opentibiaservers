import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-spells');
}

export default function AlasteraSpellsKeywordPage() {
  return <StaticKeywordPage slug="alastera-spells" />;
}
