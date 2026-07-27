import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-highscores');
}

export default function TopMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-highscores" />;
}
