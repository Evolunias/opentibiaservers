import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-7-4-retro-server');
}

export default function DragonBallLegend74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-7-4-retro-server" />;
}
