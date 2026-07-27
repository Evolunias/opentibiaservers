import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-highscores');
}

export default function ActiveCyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-highscores" />;
}
