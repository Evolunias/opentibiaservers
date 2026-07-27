import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-highscores');
}

export default function NewCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-highscores" />;
}
