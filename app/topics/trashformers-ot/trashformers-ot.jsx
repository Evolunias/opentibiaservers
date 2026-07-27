import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-ot');
}

export default function TrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="trashformers-ot" />;
}
