import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-login');
}

export default function NoResetTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-login" />;
}
