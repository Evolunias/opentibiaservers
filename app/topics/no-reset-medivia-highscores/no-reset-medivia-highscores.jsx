import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-highscores');
}

export default function NoResetMediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-highscores" />;
}
