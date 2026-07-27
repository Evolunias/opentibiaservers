import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-highscores');
}

export default function NoResetEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-highscores" />;
}
