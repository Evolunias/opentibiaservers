import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-highscores');
}

export default function HighrateCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-highscores" />;
}
