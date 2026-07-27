import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-server');
}

export default function NewDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-server" />;
}
