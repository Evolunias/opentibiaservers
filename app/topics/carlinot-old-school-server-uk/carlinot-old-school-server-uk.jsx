import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-uk');
}

export default function CarlinotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-uk" />;
}
