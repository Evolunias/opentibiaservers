import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-quests');
}

export default function EvoleraQuestsKeywordPage() {
  return <StaticKeywordPage slug="evolera-quests" />;
}
