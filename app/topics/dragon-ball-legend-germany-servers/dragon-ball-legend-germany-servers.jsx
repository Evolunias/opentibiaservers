import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-germany-servers');
}

export default function DragonBallLegendGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-germany-servers" />;
}
