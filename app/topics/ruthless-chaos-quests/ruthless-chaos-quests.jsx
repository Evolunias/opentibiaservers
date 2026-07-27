import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-quests');
}

export default function RuthlessChaosQuestsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-quests" />;
}
