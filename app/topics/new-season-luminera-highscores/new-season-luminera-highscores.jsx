import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-highscores');
}

export default function NewSeasonLumineraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-highscores" />;
}
