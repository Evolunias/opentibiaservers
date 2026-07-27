import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-ot');
}

export default function BestTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-ot" />;
}
