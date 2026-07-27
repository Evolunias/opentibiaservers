import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-highscores');
}

export default function OtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="otmadness-highscores" />;
}
