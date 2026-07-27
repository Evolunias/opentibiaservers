import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-open-tibia');
}

export default function NewSeasonDragonBallLegendOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-open-tibia" />;
}
