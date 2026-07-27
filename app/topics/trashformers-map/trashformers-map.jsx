import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-map');
}

export default function TrashformersMapKeywordPage() {
  return <StaticKeywordPage slug="trashformers-map" />;
}
