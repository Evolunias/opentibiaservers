import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-highscores');
}

export default function CurrentKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-highscores" />;
}
