import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-similar-servers');
}

export default function TrashformersSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="trashformers-similar-servers" />;
}
