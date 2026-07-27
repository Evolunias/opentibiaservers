import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-highscores');
}

export default function ActiveTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-highscores" />;
}
