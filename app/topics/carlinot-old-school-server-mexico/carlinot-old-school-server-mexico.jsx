import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-mexico');
}

export default function CarlinotOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-mexico" />;
}
