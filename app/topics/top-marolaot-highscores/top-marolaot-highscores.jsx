import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-highscores');
}

export default function TopMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-highscores" />;
}
