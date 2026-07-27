import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-mexico');
}

export default function CalmeraOtOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-mexico" />;
}
