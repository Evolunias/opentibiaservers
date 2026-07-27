import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-poland');
}

export default function ThaisotOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-poland" />;
}
