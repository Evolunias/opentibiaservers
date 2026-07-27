import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-ots');
}

export default function FreshStartTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-ots" />;
}
