import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-highscores');
}

export default function FreshStartCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-highscores" />;
}
