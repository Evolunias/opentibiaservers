import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-highscores');
}

export default function LowrateCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-highscores" />;
}
