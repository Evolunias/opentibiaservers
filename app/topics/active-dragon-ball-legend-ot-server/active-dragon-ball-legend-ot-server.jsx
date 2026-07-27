import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-ot-server');
}

export default function ActiveDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-ot-server" />;
}
