import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-north-america-server');
}

export default function DragonBallLegendNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-north-america-server" />;
}
