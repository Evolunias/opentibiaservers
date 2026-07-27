import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-highscores');
}

export default function DragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-highscores" />;
}
