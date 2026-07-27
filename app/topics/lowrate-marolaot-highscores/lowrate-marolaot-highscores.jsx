import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-highscores');
}

export default function LowrateMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-highscores" />;
}
