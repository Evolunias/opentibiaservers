import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-highscores');
}

export default function FreshStartTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-highscores" />;
}
