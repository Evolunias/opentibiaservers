import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dragon-ball-legend-highscores');
}

export default function TopDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-dragon-ball-legend-highscores" />;
}
