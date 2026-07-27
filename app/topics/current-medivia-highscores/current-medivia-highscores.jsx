import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-highscores');
}

export default function CurrentMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-highscores" />;
}
