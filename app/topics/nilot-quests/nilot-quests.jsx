import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-quests');
}

export default function NilotQuestsKeywordPage() {
  return <StaticKeywordPage slug="nilot-quests" />;
}
