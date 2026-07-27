import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-highscores');
}

export default function NoResetCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-highscores" />;
}
