import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-guide');
}

export default function HighrateRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-guide" />;
}
