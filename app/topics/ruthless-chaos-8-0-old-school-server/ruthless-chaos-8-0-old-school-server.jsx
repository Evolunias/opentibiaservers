import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-8-0-old-school-server');
}

export default function RuthlessChaos80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-8-0-old-school-server" />;
}
