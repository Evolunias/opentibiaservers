import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-no-reset-server-poland');
}

export default function TrashformersNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="trashformers-no-reset-server-poland" />;
}
