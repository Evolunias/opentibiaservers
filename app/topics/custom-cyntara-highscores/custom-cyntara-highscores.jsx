import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-highscores');
}

export default function CustomCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-highscores" />;
}
