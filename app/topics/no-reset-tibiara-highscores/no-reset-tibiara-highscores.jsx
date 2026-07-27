import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-highscores');
}

export default function NoResetTibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-highscores" />;
}
