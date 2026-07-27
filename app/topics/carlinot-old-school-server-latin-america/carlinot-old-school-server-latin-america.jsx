import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-latin-america');
}

export default function CarlinotOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-latin-america" />;
}
