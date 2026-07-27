import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-north-america');
}

export default function TrashformersNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-north-america" />;
}
