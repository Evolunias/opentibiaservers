import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-tibia');
}

export default function DragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-tibia" />;
}
