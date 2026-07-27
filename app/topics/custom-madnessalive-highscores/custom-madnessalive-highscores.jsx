import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-highscores');
}

export default function CustomMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-highscores" />;
}
