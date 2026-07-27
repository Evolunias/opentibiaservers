import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-highscores');
}

export default function MarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="marolaot-highscores" />;
}
