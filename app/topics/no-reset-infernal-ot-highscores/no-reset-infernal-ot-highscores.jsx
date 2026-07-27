import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-highscores');
}

export default function NoResetInfernalOtHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-highscores" />;
}
