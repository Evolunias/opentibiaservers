import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-ots');
}

export default function CustomTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-ots" />;
}
