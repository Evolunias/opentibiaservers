import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-highscores');
}

export default function NoResetCalmeraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-highscores" />;
}
