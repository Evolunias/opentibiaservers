import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-france');
}

export default function ThaisotOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-france" />;
}
