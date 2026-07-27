import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-old-school-server');
}

export default function CalmeraOt1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-old-school-server" />;
}
