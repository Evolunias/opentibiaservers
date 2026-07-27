import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-highscores');
}

export default function NewSeasonOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-highscores" />;
}
