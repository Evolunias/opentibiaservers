import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dragon-ball-legend-highscores');
}

export default function ActiveDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-dragon-ball-legend-highscores" />;
}
