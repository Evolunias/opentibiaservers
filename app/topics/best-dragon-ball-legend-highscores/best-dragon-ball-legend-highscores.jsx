import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-highscores');
}

export default function BestDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-highscores" />;
}
