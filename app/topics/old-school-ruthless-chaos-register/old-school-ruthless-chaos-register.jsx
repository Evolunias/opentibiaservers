import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-register');
}

export default function OldSchoolRuthlessChaosRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-register" />;
}
