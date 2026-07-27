import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-realesta-highscores');
}

export default function Keyword2026RealestaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-realesta-highscores" />;
}
