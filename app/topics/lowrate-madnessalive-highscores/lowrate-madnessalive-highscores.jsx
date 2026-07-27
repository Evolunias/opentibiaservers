import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-highscores');
}

export default function LowrateMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-highscores" />;
}
