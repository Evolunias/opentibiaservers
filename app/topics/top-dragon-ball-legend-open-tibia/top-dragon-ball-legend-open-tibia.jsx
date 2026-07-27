import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-open-tibia');
}

export default function TopDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-open-tibia" />;
}
