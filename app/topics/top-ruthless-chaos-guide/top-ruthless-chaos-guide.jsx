import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-guide');
}

export default function TopRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-guide" />;
}
