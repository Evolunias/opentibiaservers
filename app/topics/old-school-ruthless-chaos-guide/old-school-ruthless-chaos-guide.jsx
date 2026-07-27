import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-guide');
}

export default function OldSchoolRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-guide" />;
}
