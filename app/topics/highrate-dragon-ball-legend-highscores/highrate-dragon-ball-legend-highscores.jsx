import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dragon-ball-legend-highscores');
}

export default function HighrateDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-dragon-ball-legend-highscores" />;
}
