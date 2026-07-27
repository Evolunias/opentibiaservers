import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-canada');
}

export default function CarlinotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-canada" />;
}
