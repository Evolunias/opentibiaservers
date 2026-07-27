import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-old-school-server-europe');
}

export default function CarlinotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-old-school-server-europe" />;
}
