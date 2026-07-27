import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-north-america-servers');
}

export default function DragonBallLegendNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-north-america-servers" />;
}
