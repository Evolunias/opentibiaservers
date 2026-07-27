import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-private-server');
}

export default function DragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-private-server" />;
}
