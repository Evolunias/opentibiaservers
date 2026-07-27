import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-official');
}

export default function LowrateDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-official" />;
}
