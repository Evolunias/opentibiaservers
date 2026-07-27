import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-tibia');
}

export default function ActiveDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-tibia" />;
}
