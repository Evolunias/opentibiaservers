import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-highscores');
}

export default function CustomZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-highscores" />;
}
