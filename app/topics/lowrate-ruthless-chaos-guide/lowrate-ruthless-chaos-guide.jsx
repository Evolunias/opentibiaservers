import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-guide');
}

export default function LowrateRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-guide" />;
}
