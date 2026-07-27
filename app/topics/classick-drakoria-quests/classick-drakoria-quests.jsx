import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-quests');
}

export default function ClassickDrakoriaQuestsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-quests" />;
}
