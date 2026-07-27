import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers');
}

export default function PopularTrashformersKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers" />;
}
