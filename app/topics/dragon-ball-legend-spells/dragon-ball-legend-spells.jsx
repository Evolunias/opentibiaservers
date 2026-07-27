import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-spells');
}

export default function DragonBallLegendSpellsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-spells" />;
}
