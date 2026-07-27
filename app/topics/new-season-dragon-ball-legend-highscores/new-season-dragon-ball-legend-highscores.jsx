import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dragon-ball-legend-highscores');
}

export default function NewSeasonDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-dragon-ball-legend-highscores" />;
}
