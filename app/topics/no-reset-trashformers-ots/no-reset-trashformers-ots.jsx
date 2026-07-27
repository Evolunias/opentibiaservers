import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-ots');
}

export default function NoResetTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-ots" />;
}
