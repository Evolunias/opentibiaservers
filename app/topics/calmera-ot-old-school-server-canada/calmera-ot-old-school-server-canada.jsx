import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-canada');
}

export default function CalmeraOtOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-canada" />;
}
