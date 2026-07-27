import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-canada');
}

export default function EvoluniaOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-canada" />;
}
