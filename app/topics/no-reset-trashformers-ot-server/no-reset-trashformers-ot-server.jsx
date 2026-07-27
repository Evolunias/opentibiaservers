import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-ot-server');
}

export default function NoResetTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-ot-server" />;
}
