import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-usa');
}

export default function EvoluniaOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-usa" />;
}
