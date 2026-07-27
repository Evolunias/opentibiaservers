import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-guide');
}

export default function BestRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-guide" />;
}
