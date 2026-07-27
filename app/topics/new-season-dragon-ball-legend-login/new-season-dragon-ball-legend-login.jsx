import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-login');
}

export default function NewSeasonDragonBallLegendLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-login" />;
}
