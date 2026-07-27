import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-brazil');
}

export default function ThaisotOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-brazil" />;
}
