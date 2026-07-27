import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-server');
}

export default function ActiveDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-server" />;
}
