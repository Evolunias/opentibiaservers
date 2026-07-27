import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-eldera-highscores');
}

export default function Keyword2026ElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-eldera-highscores" />;
}
