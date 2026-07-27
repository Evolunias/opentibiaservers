import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-old-school-server-poland');
}

export default function CalmeraOtOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-old-school-server-poland" />;
}
