import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-rules');
}

export default function BestTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-rules" />;
}
