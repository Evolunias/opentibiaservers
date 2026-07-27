import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-72-old-school-server');
}

export default function CalmeraOt772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-72-old-school-server" />;
}
