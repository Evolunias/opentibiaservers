import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dragon-ball-legend-highscores');
}

export default function CustomDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-dragon-ball-legend-highscores" />;
}
