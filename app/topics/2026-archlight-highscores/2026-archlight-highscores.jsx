import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-archlight-highscores');
}

export default function Keyword2026ArchlightHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-archlight-highscores" />;
}
