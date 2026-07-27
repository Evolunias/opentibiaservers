import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-quests');
}

export default function KasteriaQuestsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-quests" />;
}
