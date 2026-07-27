import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-quests');
}

export default function DragonBallLegendQuestsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-quests" />;
}
