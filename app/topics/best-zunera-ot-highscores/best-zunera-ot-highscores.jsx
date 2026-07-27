import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-highscores');
}

export default function BestZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-highscores" />;
}
