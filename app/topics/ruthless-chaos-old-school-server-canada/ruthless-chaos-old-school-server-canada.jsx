import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-canada');
}

export default function RuthlessChaosOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-canada" />;
}
