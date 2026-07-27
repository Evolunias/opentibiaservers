import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-rules');
}

export default function LowrateUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-rules" />;
}
