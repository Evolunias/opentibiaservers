import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiara-highscores');
}

export default function Keyword2026TibiaraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiara-highscores" />;
}
