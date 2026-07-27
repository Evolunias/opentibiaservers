import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-highscores');
}

export default function OfficialDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-highscores" />;
}
