import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-france');
}

export default function CalmeraOtOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-france" />;
}
