import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-rules');
}

export default function HighrateTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-rules" />;
}
