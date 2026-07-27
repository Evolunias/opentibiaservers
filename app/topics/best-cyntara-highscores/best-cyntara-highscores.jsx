import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-highscores');
}

export default function BestCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-highscores" />;
}
