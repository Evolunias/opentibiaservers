import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-login');
}

export default function TopTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-login" />;
}
