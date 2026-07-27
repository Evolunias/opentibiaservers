import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-highscores');
}

export default function NoResetMarolaotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-highscores" />;
}
