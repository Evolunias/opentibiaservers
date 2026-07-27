import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-rules');
}

export default function PopularTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-rules" />;
}
