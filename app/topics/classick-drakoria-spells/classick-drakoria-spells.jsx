import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-spells');
}

export default function ClassickDrakoriaSpellsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-spells" />;
}
