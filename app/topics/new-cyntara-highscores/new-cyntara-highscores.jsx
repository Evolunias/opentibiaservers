import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-highscores');
}

export default function NewCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-highscores" />;
}
