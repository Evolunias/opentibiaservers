import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-highscores');
}

export default function OfficialOtmadnessHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-highscores" />;
}
