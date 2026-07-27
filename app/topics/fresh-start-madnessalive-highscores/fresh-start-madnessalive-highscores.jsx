import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-highscores');
}

export default function FreshStartMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-highscores" />;
}
