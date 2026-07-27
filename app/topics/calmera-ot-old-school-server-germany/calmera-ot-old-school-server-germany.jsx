import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-germany');
}

export default function CalmeraOtOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-germany" />;
}
