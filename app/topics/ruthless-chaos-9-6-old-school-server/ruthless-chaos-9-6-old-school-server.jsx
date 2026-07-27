import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-9-6-old-school-server');
}

export default function RuthlessChaos96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-9-6-old-school-server" />;
}
