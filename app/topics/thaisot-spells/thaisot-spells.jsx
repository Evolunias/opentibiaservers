import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-spells');
}

export default function ThaisotSpellsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-spells" />;
}
