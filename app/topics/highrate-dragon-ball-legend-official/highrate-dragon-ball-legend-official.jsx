import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-official');
}

export default function HighrateDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-official" />;
}
