import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-argentina');
}

export default function RuthlessChaosOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-argentina" />;
}
