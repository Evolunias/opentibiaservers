import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-saintsot-highscores');
}

export default function Keyword2026SaintsotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-saintsot-highscores" />;
}
