import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-rules');
}

export default function TopEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-rules" />;
}
