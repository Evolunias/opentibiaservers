import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-highscores');
}

export default function LowrateTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-highscores" />;
}
