import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-highscores');
}

export default function CustomMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-highscores" />;
}
