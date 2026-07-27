import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-poland');
}

export default function CarlinotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-poland" />;
}
