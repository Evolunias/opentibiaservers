import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-usa');
}

export default function CalmeraOtOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-usa" />;
}
