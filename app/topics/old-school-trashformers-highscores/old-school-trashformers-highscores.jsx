import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-highscores');
}

export default function OldSchoolTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-highscores" />;
}
