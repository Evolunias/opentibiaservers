import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-rules');
}

export default function PopularUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-rules" />;
}
