import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-sweden');
}

export default function EvoluniaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-sweden" />;
}
