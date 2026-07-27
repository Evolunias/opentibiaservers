import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-rules');
}

export default function BestUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="best-unline-rules" />;
}
