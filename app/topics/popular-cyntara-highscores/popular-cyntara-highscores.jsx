import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-highscores');
}

export default function PopularCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-highscores" />;
}
