import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers');
}

export default function BestTrashformersKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers" />;
}
