import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-highscores');
}

export default function NoResetClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-highscores" />;
}
