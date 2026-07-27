import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-old-school-server');
}

export default function CalmeraOt71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-old-school-server" />;
}
