import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-rules');
}

export default function CurrentEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-rules" />;
}
