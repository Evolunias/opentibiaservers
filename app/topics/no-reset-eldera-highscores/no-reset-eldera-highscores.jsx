import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-highscores');
}

export default function NoResetElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-highscores" />;
}
