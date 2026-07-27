import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-highscores');
}

export default function HighrateYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-highscores" />;
}
