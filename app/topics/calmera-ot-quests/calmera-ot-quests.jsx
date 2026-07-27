import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-quests');
}

export default function CalmeraOtQuestsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-quests" />;
}
