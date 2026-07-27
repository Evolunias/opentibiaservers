import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-14-old-school-server');
}

export default function RuthlessChaos14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-14-old-school-server" />;
}
