import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-highscores');
}

export default function CurrentTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-highscores" />;
}
