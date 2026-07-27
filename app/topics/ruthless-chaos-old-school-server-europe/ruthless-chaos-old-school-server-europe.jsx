import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-europe');
}

export default function RuthlessChaosOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-europe" />;
}
