import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-oldera-highscores');
}

export default function Keyword2026OlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-oldera-highscores" />;
}
