import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-quests');
}

export default function RubinotQuestsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-quests" />;
}
