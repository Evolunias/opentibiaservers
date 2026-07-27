import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-highscores');
}

export default function PopularRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-highscores" />;
}
