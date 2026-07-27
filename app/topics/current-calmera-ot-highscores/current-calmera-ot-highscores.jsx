import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-highscores');
}

export default function CurrentCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-highscores" />;
}
