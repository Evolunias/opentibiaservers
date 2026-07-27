import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers');
}

export default function ActiveTrashformersKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers" />;
}
