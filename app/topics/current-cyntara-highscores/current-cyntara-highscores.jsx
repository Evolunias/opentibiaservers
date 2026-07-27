import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-highscores');
}

export default function CurrentCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-highscores" />;
}
