import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-private-server');
}

export default function NoResetTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-private-server" />;
}
