import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-old-school-server');
}

export default function CalmeraOt11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-old-school-server" />;
}
