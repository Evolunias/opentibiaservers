import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-uk');
}

export default function RuthlessChaosOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-uk" />;
}
