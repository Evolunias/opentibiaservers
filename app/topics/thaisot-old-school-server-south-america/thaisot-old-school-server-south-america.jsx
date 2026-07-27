import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-old-school-server-south-america');
}

export default function ThaisotOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-old-school-server-south-america" />;
}
