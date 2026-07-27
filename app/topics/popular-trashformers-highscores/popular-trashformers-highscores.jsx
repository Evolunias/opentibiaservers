import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-highscores');
}

export default function PopularTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-highscores" />;
}
