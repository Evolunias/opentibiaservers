import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-rules');
}

export default function TopTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-rules" />;
}
