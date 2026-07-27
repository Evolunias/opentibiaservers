import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-ot-server');
}

export default function ActiveTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-ot-server" />;
}
