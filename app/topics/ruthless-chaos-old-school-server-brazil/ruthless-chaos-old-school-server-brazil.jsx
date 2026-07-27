import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-brazil');
}

export default function RuthlessChaosOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-brazil" />;
}
