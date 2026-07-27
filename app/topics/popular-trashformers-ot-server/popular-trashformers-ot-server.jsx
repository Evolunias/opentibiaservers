import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-ot-server');
}

export default function PopularTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-ot-server" />;
}
