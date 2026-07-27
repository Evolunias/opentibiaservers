import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-north-america');
}

export default function CarlinotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-north-america" />;
}
