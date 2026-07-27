import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-quests');
}

export default function ClassicusQuestsKeywordPage() {
  return <StaticKeywordPage slug="classicus-quests" />;
}
