import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-highscores');
}

export default function PopularMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-highscores" />;
}
