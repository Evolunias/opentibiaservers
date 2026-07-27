import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-12-old-school-server');
}

export default function RuthlessChaos12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-12-old-school-server" />;
}
