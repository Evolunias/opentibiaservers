import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-highscores');
}

export default function FreshStartLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-highscores" />;
}
