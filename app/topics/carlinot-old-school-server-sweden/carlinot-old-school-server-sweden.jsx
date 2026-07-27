import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-sweden');
}

export default function CarlinotOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-sweden" />;
}
