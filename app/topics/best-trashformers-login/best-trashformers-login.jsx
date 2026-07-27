import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-login');
}

export default function BestTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-login" />;
}
