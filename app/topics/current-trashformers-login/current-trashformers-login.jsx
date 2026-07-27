import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-login');
}

export default function CurrentTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-login" />;
}
