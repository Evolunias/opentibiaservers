import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-quests');
}

export default function ArcaniarlQuestsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-quests" />;
}
