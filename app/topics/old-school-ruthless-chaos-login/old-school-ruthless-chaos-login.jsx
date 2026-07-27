import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-login');
}

export default function OldSchoolRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-login" />;
}
