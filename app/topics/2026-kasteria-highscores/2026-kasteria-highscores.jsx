import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-kasteria-highscores');
}

export default function Keyword2026KasteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-kasteria-highscores" />;
}
