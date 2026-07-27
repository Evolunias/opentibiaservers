import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-old-school-server-latin-america');
}

export default function RuthlessChaosOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-old-school-server-latin-america" />;
}
