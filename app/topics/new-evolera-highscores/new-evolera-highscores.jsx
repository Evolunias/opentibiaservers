import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-highscores');
}

export default function NewEvoleraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-highscores" />;
}
