import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-ots');
}

export default function HighrateTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-ots" />;
}
