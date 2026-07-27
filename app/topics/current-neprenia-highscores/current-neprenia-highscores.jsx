import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-highscores');
}

export default function CurrentNepreniaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-highscores" />;
}
