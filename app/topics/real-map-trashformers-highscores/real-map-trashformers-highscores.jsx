import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-highscores');
}

export default function RealMapTrashformersHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-highscores" />;
}
