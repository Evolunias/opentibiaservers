import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-highscores');
}

export default function CustomTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-highscores" />;
}
