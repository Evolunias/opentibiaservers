import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-old-school-server');
}

export default function CalmeraOt12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-old-school-server" />;
}
