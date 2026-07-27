import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-ot-server');
}

export default function TopDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-ot-server" />;
}
