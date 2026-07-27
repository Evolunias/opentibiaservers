import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-server');
}

export default function FreshStartDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-server" />;
}
