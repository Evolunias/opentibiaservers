import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-4-old-school-server');
}

export default function RuthlessChaos84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-4-old-school-server" />;
}
