import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-guide');
}

export default function NoResetTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-guide" />;
}
