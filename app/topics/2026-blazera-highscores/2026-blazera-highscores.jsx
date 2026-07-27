import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-blazera-highscores');
}

export default function Keyword2026BlazeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-blazera-highscores" />;
}
