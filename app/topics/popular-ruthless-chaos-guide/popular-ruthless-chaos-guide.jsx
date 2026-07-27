import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-guide');
}

export default function PopularRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-guide" />;
}
