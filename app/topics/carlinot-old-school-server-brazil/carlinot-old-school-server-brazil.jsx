import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-brazil');
}

export default function CarlinotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-brazil" />;
}
