import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-north-america');
}

export default function CalmeraOtOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-north-america" />;
}
