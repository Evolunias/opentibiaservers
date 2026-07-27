import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-france');
}

export default function CarlinotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-france" />;
}
