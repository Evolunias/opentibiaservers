import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-highscores');
}

export default function PopularCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-highscores" />;
}
