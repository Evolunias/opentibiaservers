import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-dragon-ball-legend-highscores');
}

export default function OldSchoolDragonBallLegendHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-dragon-ball-legend-highscores" />;
}
