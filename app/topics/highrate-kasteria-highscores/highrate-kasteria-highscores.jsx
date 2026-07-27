import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-highscores');
}

export default function HighrateKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-highscores" />;
}
