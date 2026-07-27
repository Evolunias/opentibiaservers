import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-usa');
}

export default function CarlinotOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-usa" />;
}
