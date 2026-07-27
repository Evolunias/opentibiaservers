import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-highscores');
}

export default function FreshStartCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-highscores" />;
}
