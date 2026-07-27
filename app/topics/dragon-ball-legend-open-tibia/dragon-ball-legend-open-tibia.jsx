import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-open-tibia');
}

export default function DragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-open-tibia" />;
}
