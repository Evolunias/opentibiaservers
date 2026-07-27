import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-quests');
}

export default function TrashformersQuestsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-quests" />;
}
