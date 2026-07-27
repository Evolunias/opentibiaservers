import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-mexico');
}

export default function EvoluniaOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-mexico" />;
}
