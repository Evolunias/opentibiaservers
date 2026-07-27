import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-highscores');
}

export default function HighrateNilotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-highscores" />;
}
