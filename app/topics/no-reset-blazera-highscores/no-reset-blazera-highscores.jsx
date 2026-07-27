import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-highscores');
}

export default function NoResetBlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-highscores" />;
}
