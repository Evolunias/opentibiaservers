import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-quests');
}

export default function ShadowcoresQuestsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-quests" />;
}
