import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-ots');
}

export default function DragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-ots" />;
}
