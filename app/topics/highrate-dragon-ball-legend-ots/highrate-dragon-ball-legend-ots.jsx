import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-ots');
}

export default function HighrateDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-ots" />;
}
