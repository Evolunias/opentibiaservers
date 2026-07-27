import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-quests');
}

export default function MadnessaliveQuestsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-quests" />;
}
