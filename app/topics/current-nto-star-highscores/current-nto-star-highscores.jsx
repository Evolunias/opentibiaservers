import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-highscores');
}

export default function CurrentNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-highscores" />;
}
