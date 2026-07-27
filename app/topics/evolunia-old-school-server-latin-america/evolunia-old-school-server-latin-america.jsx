import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-latin-america');
}

export default function EvoluniaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-latin-america" />;
}
