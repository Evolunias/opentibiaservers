import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-highscores');
}

export default function ActiveOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-highscores" />;
}
