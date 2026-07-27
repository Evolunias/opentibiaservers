import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-germany');
}

export default function ThaisotOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-germany" />;
}
