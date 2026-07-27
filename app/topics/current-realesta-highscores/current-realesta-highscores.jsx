import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-highscores');
}

export default function CurrentRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-highscores" />;
}
