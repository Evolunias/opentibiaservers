import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-highscores');
}

export default function NewTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-highscores" />;
}
