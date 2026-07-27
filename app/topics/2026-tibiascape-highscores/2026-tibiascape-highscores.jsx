import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibiascape-highscores');
}

export default function Keyword2026TibiascapeHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-tibiascape-highscores" />;
}
