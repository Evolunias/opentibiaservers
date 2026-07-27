import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-spells');
}

export default function NilotSpellsKeywordPage() {
  return <StaticKeywordPage slug="nilot-spells" />;
}
