import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-germany');
}

export default function EvoluniaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-germany" />;
}
