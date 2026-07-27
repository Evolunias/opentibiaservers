import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-quests');
}

export default function RangerSArcaniQuestsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-quests" />;
}
