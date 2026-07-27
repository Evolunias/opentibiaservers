import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-canada-server');
}

export default function DragonBallLegendCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-canada-server" />;
}
