import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-germany');
}

export default function CarlinotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-germany" />;
}
