import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-ot-server');
}

export default function TrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-ot-server" />;
}
