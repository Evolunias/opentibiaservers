import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-south-america-server');
}

export default function DragonBallLegendSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-south-america-server" />;
}
