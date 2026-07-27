import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-login');
}

export default function TrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="trashformers-login" />;
}
