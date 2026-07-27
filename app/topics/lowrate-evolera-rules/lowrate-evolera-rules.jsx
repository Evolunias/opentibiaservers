import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-rules');
}

export default function LowrateEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-rules" />;
}
