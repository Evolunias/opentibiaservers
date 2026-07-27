import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-highscores');
}

export default function PopularElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-highscores" />;
}
