import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-highscores');
}

export default function HighrateMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-highscores" />;
}
