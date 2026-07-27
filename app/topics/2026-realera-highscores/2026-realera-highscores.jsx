import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realera-highscores');
}

export default function Keyword2026RealeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-realera-highscores" />;
}
