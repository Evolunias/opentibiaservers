import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-old-school-server');
}

export default function CalmeraOt80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-old-school-server" />;
}
