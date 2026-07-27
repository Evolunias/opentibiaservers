import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-rules');
}

export default function ActiveEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-rules" />;
}
