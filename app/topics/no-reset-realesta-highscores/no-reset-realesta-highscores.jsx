import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-highscores');
}

export default function NoResetRealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-highscores" />;
}
