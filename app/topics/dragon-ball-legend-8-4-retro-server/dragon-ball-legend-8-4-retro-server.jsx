import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-4-retro-server');
}

export default function DragonBallLegend84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-4-retro-server" />;
}
