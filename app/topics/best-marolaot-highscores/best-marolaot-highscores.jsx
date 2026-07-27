import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-highscores');
}

export default function BestMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-highscores" />;
}
