import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-highscores');
}

export default function FreshStartMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-highscores" />;
}
