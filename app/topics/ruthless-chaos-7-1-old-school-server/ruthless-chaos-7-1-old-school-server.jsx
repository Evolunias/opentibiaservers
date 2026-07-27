import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-7-1-old-school-server');
}

export default function RuthlessChaos71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-7-1-old-school-server" />;
}
