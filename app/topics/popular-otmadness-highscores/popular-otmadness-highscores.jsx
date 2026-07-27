import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-highscores');
}

export default function PopularOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-highscores" />;
}
