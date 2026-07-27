import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dragon-ball-legend-highscores');
}

export default function RealMapDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-dragon-ball-legend-highscores" />;
}
