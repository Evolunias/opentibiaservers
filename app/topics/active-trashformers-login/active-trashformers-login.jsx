import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-login');
}

export default function ActiveTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-login" />;
}
