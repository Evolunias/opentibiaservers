import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-client');
}

export default function OldSchoolRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-client" />;
}
