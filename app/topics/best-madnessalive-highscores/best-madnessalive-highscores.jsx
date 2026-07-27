import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-highscores');
}

export default function BestMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-highscores" />;
}
