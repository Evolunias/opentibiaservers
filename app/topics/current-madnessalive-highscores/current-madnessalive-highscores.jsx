import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-highscores');
}

export default function CurrentMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-highscores" />;
}
