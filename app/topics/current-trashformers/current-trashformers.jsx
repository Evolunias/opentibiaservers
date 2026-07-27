import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers');
}

export default function CurrentTrashformersKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers" />;
}
