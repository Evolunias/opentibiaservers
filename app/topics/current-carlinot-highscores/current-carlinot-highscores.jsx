import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-highscores');
}

export default function CurrentCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-highscores" />;
}
