import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-ots');
}

export default function ActiveDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-ots" />;
}
