import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-guide');
}

export default function ActiveTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-guide" />;
}
