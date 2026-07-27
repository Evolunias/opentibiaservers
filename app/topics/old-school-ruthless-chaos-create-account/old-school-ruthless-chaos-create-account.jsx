import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-create-account');
}

export default function OldSchoolRuthlessChaosCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-create-account" />;
}
