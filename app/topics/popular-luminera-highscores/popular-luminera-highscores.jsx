import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-highscores');
}

export default function PopularLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-highscores" />;
}
