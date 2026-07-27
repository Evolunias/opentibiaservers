import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-server');
}

export default function DragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-server" />;
}
