import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-ot-server');
}

export default function PopularDragonBallLegendOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-ot-server" />;
}
