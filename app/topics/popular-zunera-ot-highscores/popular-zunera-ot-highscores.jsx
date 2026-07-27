import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-highscores');
}

export default function PopularZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-highscores" />;
}
