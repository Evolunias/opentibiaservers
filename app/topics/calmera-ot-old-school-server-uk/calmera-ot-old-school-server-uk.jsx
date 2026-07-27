import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-uk');
}

export default function CalmeraOtOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-uk" />;
}
