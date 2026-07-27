import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-highscores');
}

export default function HighrateMadnessaliveHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-highscores" />;
}
