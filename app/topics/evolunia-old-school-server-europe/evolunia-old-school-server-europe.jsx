import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-europe');
}

export default function EvoluniaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-europe" />;
}
