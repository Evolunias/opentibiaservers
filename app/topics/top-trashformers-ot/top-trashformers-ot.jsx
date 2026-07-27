import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-ot');
}

export default function TopTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-ot" />;
}
