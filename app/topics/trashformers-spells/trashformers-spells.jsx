import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-spells');
}

export default function TrashformersSpellsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-spells" />;
}
