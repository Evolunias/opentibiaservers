import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-ameria-highscores');
}

export default function Keyword2026AmeriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-ameria-highscores" />;
}
