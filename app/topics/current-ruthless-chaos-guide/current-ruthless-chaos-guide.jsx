import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-guide');
}

export default function CurrentRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-guide" />;
}
