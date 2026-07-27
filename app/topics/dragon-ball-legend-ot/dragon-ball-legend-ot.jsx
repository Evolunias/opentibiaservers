import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-ot');
}

export default function DragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-ot" />;
}
