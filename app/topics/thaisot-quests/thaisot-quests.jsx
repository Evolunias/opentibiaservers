import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-quests');
}

export default function ThaisotQuestsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-quests" />;
}
