import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-old-school-server-argentina');
}

export default function EvoluniaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-old-school-server-argentina" />;
}
