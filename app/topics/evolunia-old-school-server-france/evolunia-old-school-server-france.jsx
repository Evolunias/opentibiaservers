import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-france');
}

export default function EvoluniaOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-france" />;
}
