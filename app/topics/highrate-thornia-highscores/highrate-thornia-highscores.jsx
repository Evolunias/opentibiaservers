import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-highscores');
}

export default function HighrateThorniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-highscores" />;
}
