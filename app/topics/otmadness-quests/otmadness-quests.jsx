import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-quests');
}

export default function OtmadnessQuestsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-quests" />;
}
