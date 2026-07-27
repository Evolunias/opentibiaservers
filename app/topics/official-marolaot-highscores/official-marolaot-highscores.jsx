import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-highscores');
}

export default function OfficialMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-highscores" />;
}
