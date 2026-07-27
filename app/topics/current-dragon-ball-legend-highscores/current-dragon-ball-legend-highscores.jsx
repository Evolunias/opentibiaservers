import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-highscores');
}

export default function CurrentDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-highscores" />;
}
