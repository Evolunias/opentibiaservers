import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-highscores');
}

export default function NoResetOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-highscores" />;
}
