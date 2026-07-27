import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-poland');
}

export default function RuthlessChaosOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-poland" />;
}
