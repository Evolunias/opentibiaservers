import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-usa');
}

export default function TrashformersNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-usa" />;
}
