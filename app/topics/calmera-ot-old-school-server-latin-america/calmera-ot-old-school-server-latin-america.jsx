import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-latin-america');
}

export default function CalmeraOtOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-latin-america" />;
}
