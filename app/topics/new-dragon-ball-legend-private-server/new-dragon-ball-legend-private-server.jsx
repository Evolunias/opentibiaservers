import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-private-server');
}

export default function NewDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-private-server" />;
}
