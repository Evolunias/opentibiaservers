import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-ots');
}

export default function CurrentTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-ots" />;
}
