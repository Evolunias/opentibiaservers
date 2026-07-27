import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-xanteria-highscores');
}

export default function Keyword2026XanteriaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-xanteria-highscores" />;
}
