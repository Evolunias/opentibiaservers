import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-ot-server');
}

export default function FreshStartTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-ot-server" />;
}
