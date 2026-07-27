import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-highscores');
}

export default function NoResetHarmoniaOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-highscores" />;
}
