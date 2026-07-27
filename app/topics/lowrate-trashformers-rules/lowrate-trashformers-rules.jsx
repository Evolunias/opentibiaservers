import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-rules');
}

export default function LowrateTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-rules" />;
}
