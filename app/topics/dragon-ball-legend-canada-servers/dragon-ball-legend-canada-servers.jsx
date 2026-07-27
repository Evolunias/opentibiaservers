import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-canada-servers');
}

export default function DragonBallLegendCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-canada-servers" />;
}
