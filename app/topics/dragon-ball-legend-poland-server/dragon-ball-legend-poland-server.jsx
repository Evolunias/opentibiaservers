import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-poland-server');
}

export default function DragonBallLegendPolandServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-poland-server" />;
}
