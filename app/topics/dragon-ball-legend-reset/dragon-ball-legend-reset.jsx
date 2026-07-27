import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-reset');
}

export default function DragonBallLegendResetKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-reset" />;
}
