import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-poland-servers');
}

export default function DragonBallLegendPolandServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-poland-servers" />;
}
