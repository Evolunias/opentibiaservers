import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-south-america');
}

export default function EvoluniaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-south-america" />;
}
