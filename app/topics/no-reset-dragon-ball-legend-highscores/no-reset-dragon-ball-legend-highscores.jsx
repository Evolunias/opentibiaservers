import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dragon-ball-legend-highscores');
}

export default function NoResetDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dragon-ball-legend-highscores" />;
}
