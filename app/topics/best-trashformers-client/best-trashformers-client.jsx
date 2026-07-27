import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-client');
}

export default function BestTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-client" />;
}
