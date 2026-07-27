import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-rules');
}

export default function TrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="trashformers-rules" />;
}
