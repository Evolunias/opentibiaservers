import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-quests');
}

export default function SaintsotQuestsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-quests" />;
}
