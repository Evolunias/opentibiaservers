import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-server');
}

export default function BestTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-server" />;
}
