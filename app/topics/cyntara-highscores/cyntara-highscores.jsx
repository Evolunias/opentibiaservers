import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-highscores');
}

export default function CyntaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="cyntara-highscores" />;
}
