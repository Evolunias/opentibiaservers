import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-highscores');
}

export default function NoResetCarlinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-highscores" />;
}
