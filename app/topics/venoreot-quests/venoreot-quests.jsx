import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-quests');
}

export default function VenoreotQuestsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-quests" />;
}
