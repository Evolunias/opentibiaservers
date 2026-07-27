import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-highscores');
}

export default function BestTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-highscores" />;
}
