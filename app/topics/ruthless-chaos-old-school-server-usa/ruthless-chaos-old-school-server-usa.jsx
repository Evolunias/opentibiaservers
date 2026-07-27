import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-usa');
}

export default function RuthlessChaosOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-usa" />;
}
