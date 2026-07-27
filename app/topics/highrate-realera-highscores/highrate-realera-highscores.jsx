import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-highscores');
}

export default function HighrateRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-highscores" />;
}
