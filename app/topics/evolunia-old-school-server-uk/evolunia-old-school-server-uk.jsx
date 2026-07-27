import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-uk');
}

export default function EvoluniaOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-uk" />;
}
