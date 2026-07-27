import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-highscores');
}

export default function PopularNtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-highscores" />;
}
