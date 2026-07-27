import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-highscores');
}

export default function PopularBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-highscores" />;
}
