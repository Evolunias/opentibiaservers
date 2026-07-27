import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-rules');
}

export default function NewEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-rules" />;
}
