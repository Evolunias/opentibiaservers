import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-ot');
}

export default function ActiveTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-ot" />;
}
