import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-15-old-school-server');
}

export default function RuthlessChaos15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-15-old-school-server" />;
}
