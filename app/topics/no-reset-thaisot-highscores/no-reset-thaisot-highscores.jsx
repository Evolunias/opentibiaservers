import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-highscores');
}

export default function NoResetThaisotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-highscores" />;
}
