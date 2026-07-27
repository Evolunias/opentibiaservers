import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-ot-server');
}

export default function CurrentTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-ot-server" />;
}
