import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-quests');
}

export default function CarlinotQuestsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-quests" />;
}
