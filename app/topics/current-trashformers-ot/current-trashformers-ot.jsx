import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-ot');
}

export default function CurrentTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-ot" />;
}
