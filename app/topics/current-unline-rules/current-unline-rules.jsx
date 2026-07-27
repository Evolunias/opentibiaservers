import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-rules');
}

export default function CurrentUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="current-unline-rules" />;
}
