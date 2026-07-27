import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-highscores');
}

export default function HighrateEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-highscores" />;
}
