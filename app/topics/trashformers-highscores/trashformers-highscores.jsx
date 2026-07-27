import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-highscores');
}

export default function TrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="trashformers-highscores" />;
}
