import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-france');
}

export default function RuthlessChaosOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-france" />;
}
