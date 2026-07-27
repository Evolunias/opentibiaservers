import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dragon-ball-legend-highscores');
}

export default function NewDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-dragon-ball-legend-highscores" />;
}
