import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-ot');
}

export default function LowrateDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-ot" />;
}
