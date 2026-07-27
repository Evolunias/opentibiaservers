import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-brazil');
}

export default function CalmeraOtOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-brazil" />;
}
