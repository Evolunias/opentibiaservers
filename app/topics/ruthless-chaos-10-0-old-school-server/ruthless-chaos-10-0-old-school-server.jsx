import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-10-0-old-school-server');
}

export default function RuthlessChaos100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-10-0-old-school-server" />;
}
