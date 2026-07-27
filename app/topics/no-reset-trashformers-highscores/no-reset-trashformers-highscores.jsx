import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-highscores');
}

export default function NoResetTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-highscores" />;
}
