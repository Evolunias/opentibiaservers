import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-private-server');
}

export default function CustomDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-private-server" />;
}
