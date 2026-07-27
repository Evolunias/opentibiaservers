import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-low-exp-server-usa');
}

export default function DragonBallLegendLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-low-exp-server-usa" />;
}
