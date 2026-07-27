import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-latin-america');
}

export default function TrashformersNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-latin-america" />;
}
