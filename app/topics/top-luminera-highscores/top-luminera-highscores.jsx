import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-highscores');
}

export default function TopLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-highscores" />;
}
