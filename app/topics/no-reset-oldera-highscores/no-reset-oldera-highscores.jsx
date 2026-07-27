import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-highscores');
}

export default function NoResetOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-highscores" />;
}
