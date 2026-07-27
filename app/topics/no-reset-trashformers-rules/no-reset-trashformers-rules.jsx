import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-rules');
}

export default function NoResetTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-rules" />;
}
