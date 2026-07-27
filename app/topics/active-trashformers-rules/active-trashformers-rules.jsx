import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-rules');
}

export default function ActiveTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-rules" />;
}
