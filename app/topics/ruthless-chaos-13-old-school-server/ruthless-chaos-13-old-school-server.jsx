import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-13-old-school-server');
}

export default function RuthlessChaos13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-13-old-school-server" />;
}
