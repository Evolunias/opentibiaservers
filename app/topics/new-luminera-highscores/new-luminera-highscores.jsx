import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-luminera-highscores');
}

export default function NewLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-luminera-highscores" />;
}
