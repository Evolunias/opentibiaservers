import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-highscores');
}

export default function NewClassicusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-highscores" />;
}
