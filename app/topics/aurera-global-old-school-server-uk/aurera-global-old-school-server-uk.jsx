import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-old-school-server-uk');
}

export default function AureraGlobalOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-old-school-server-uk" />;
}
