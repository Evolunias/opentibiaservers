import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-guide');
}

export default function ActiveRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-guide" />;
}
