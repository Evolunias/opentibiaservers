import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-medivia-highscores');
}

export default function Keyword2026MediviaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-medivia-highscores" />;
}
