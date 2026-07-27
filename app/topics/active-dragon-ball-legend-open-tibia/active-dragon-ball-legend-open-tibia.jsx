import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-open-tibia');
}

export default function ActiveDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-open-tibia" />;
}
