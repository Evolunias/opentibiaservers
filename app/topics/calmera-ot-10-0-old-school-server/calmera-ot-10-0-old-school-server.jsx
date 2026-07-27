import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-old-school-server');
}

export default function CalmeraOt100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-old-school-server" />;
}
