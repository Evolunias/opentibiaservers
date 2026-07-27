import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dragon-ball-legend-highscores');
}

export default function FreshStartDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dragon-ball-legend-highscores" />;
}
