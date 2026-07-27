import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-bosses');
}

export default function DragonBallLegendBossesKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-bosses" />;
}
