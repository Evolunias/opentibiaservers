import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-highscores');
}

export default function LumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="luminera-highscores" />;
}
