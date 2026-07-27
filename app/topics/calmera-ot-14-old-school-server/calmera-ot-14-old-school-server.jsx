import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-old-school-server');
}

export default function CalmeraOt14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-old-school-server" />;
}
