import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-ot-server');
}

export default function TopTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-ot-server" />;
}
