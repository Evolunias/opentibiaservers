import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-website');
}

export default function NewSeasonDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-website" />;
}
