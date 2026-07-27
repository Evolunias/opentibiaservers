import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-south-america');
}

export default function CarlinotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-south-america" />;
}
