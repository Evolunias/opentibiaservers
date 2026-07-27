import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-highscores');
}

export default function NewMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-highscores" />;
}
