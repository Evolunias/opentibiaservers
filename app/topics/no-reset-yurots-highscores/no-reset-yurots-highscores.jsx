import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-highscores');
}

export default function NoResetYurotsHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-highscores" />;
}
