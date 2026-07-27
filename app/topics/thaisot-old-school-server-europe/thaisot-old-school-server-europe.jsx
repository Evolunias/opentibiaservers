import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-europe');
}

export default function ThaisotOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-europe" />;
}
