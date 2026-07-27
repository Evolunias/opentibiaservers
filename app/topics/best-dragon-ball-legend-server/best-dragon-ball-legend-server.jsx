import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-server');
}

export default function BestDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-server" />;
}
