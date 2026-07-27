import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-rules');
}

export default function TopUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="top-unline-rules" />;
}
