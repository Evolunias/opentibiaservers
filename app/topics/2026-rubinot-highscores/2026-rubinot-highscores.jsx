import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-rubinot-highscores');
}

export default function Keyword2026RubinotHighscoresKeywordPage() {
  return <StaticKeywordPage slug="2026-rubinot-highscores" />;
}
