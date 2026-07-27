import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-highscores');
}

export default function LowrateLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-highscores" />;
}
