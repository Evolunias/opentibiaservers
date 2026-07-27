import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-germany-server');
}

export default function DragonBallLegendGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-germany-server" />;
}
