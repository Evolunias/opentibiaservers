import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-rules');
}

export default function CustomTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-rules" />;
}
