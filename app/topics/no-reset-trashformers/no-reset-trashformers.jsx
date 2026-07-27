import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers');
}

export default function NoResetTrashformersKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers" />;
}
