import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers');
}

export default function CustomTrashformersKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers" />;
}
