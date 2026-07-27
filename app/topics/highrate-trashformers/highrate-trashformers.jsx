import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers');
}

export default function HighrateTrashformersKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers" />;
}
