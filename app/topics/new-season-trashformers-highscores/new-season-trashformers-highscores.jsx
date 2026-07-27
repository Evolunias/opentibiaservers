import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-highscores');
}

export default function NewSeasonTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-highscores" />;
}
