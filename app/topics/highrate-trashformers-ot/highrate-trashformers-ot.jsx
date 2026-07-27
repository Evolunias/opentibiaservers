import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-ot');
}

export default function HighrateTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-ot" />;
}
