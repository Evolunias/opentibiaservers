import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-ots');
}

export default function BestTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-ots" />;
}
