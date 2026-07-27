import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-uk');
}

export default function TrashformersNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-uk" />;
}
