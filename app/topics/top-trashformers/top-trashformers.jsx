import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers');
}

export default function TopTrashformersKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers" />;
}
