import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-highscores');
}

export default function TopCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-highscores" />;
}
