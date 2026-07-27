import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-north-america');
}

export default function ThaisotOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-north-america" />;
}
