import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-highscores');
}

export default function OfficialTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-highscores" />;
}
