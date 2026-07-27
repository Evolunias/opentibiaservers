import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-ot');
}

export default function CustomTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-ot" />;
}
