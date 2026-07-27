import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-poland');
}

export default function EvoluniaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-poland" />;
}
