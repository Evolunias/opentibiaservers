import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-spells');
}

export default function ClassicusSpellsKeywordPage() {
  return <StaticKeywordPage slug="classicus-spells" />;
}
