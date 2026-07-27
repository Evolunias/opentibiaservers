import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-retro-server');
}

export default function DragonBallLegend14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-retro-server" />;
}
