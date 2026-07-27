import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-highscores');
}

export default function LowrateDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-highscores" />;
}
