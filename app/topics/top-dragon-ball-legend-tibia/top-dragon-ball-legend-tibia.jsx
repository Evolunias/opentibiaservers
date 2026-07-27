import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-tibia');
}

export default function TopDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-tibia" />;
}
