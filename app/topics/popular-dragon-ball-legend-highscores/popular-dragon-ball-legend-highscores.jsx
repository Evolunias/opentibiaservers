import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-highscores');
}

export default function PopularDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-highscores" />;
}
