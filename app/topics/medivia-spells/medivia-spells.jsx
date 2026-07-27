import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-spells');
}

export default function MediviaSpellsKeywordPage() {
  return <StaticKeywordPage slug="medivia-spells" />;
}
