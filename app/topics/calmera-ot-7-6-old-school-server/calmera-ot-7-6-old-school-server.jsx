import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-6-old-school-server');
}

export default function CalmeraOt76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-6-old-school-server" />;
}
