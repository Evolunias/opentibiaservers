import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-ots');
}

export default function TopTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-ots" />;
}
