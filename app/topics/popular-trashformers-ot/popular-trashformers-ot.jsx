import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-ot');
}

export default function PopularTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-ot" />;
}
