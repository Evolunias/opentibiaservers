import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-ot-server');
}

export default function OldSchoolRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-ot-server" />;
}
