import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-retro-server');
}

export default function DragonBallLegend12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-retro-server" />;
}
