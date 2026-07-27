import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-south-america-servers');
}

export default function DragonBallLegendSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-south-america-servers" />;
}
