import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-brazil');
}

export default function EvoluniaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-brazil" />;
}
