import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-tibia');
}

export default function NewSeasonDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-tibia" />;
}
