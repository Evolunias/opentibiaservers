import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-private-server');
}

export default function ActiveDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-private-server" />;
}
