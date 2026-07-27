import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-login');
}

export default function CustomTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-login" />;
}
