import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-highscores');
}

export default function TopZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-highscores" />;
}
