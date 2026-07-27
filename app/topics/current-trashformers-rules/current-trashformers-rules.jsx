import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-rules');
}

export default function CurrentTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-rules" />;
}
