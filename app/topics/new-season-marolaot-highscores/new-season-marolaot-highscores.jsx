import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-highscores');
}

export default function NewSeasonMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-highscores" />;
}
