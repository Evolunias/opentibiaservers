import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-highscores');
}

export default function NoResetRealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-highscores" />;
}
