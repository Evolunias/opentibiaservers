import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-guide');
}

export default function LowrateTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-guide" />;
}
