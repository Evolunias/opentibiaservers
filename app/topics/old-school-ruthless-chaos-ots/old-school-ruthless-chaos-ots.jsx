import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-ots');
}

export default function OldSchoolRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-ots" />;
}
