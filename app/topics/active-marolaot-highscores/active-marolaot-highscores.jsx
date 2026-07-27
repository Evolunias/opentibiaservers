import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-highscores');
}

export default function ActiveMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-highscores" />;
}
