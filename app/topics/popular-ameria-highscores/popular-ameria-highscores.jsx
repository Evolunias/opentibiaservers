import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-highscores');
}

export default function PopularAmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-highscores" />;
}
