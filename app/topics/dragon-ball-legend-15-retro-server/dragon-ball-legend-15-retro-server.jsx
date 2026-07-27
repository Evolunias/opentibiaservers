import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-retro-server');
}

export default function DragonBallLegend15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-retro-server" />;
}
