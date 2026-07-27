import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-highscores');
}

export default function CurrentRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-realera-highscores" />;
}
