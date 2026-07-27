import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos');
}

export default function OldSchoolRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos" />;
}
