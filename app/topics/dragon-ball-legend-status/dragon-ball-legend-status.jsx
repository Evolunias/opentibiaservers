import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-status');
}

export default function DragonBallLegendStatusKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-status" />;
}
