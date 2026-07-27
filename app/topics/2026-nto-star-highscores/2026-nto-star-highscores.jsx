import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-nto-star-highscores');
}

export default function Keyword2026NtoStarHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-nto-star-highscores" />;
}
