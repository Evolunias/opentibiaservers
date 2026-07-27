import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-highscores');
}

export default function BestLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-highscores" />;
}
