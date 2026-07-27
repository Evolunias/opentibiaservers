import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-highscores');
}

export default function NoResetZuneraOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-highscores" />;
}
