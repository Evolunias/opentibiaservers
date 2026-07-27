import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-4-old-school-server');
}

export default function RuthlessChaos74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-4-old-school-server" />;
}
