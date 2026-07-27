import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-private-server');
}

export default function PopularDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-private-server" />;
}
