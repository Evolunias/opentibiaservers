import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-0-retro-server');
}

export default function DragonBallLegend80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-0-retro-server" />;
}
