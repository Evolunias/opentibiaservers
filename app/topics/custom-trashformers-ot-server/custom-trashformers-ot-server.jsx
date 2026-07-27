import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-ot-server');
}

export default function CustomTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-ot-server" />;
}
