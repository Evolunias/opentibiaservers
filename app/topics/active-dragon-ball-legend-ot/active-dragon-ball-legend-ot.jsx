import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-ot');
}

export default function ActiveDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-ot" />;
}
