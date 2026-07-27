import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-ots');
}

export default function NewSeasonDragonBallLegendOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-ots" />;
}
