import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-server');
}

export default function TopDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-server" />;
}
