import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-highscores');
}

export default function HighrateTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-highscores" />;
}
