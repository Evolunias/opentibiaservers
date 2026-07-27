import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-highscores');
}

export default function TopTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-highscores" />;
}
