import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-uk');
}

export default function ThaisotOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-uk" />;
}
