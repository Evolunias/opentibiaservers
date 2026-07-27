import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-ots');
}

export default function TrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-ots" />;
}
