import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-rules');
}

export default function NewTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-rules" />;
}
