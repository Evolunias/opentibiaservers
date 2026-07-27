import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-guide');
}

export default function HighrateTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-guide" />;
}
