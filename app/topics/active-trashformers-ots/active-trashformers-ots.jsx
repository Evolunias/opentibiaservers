import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-ots');
}

export default function ActiveTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-ots" />;
}
