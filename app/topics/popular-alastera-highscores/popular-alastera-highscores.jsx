import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-highscores');
}

export default function PopularAlasteraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-highscores" />;
}
