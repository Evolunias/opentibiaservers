import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-canada');
}

export default function ThaisotOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-canada" />;
}
