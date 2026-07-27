import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-brazil');
}

export default function TrashformersNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-brazil" />;
}
