import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-reset');
}

export default function TrashformersResetKeywordPage() {
  return <StaticKeywordPage slug="trashformers-reset" />;
}
