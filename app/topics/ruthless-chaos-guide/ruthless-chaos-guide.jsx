import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-guide');
}

export default function RuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-guide" />;
}
