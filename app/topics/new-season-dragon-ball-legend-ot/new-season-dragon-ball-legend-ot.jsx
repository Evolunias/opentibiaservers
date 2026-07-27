import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-ot');
}

export default function NewSeasonDragonBallLegendOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-ot" />;
}
