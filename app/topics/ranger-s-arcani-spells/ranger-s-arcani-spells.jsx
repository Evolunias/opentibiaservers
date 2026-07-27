import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-spells');
}

export default function RangerSArcaniSpellsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-spells" />;
}
