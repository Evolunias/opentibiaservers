import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-guide');
}

export default function CustomRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-guide" />;
}
