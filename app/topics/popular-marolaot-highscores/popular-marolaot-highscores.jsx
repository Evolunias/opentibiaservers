import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-marolaot-highscores');
}

export default function PopularMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-marolaot-highscores" />;
}
