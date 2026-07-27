import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-ots');
}

export default function PopularTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-ots" />;
}
