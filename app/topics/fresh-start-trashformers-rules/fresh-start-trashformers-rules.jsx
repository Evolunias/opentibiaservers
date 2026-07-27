import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-rules');
}

export default function FreshStartTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-rules" />;
}
