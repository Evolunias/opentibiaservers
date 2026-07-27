import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-highscores');
}

export default function PopularKasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-highscores" />;
}
