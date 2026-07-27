import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-rules');
}

export default function EvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="evolera-rules" />;
}
