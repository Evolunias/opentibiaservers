import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-highscores');
}

export default function TopNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-highscores" />;
}
