import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-ot-server');
}

export default function BestTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-ot-server" />;
}
