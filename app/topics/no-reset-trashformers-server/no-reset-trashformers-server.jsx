import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-server');
}

export default function NoResetTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-server" />;
}
