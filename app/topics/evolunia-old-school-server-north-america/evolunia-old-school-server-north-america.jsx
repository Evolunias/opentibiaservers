import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-north-america');
}

export default function EvoluniaOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-north-america" />;
}
